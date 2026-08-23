#!/bin/bash

# Скрипт для развертывания MetaFlux на VPS
set -e

echo "🚀 Развертывание MetaFlux на VPS..."

if docker compose version &>/dev/null; then
    COMPOSE="docker compose"
elif command -v docker-compose &>/dev/null; then
    COMPOSE="docker-compose"
else
    COMPOSE=""
fi

# Проверяем наличие Docker
if ! command -v docker &> /dev/null; then
    echo "❌ Docker не установлен. Устанавливаем Docker..."
    curl -fsSL https://get.docker.com -o get-docker.sh
    sh get-docker.sh
    sudo usermod -aG docker $USER
    rm get-docker.sh
    echo "✅ Docker установлен"
fi

# Проверяем наличие Docker Compose
if [ -z "$COMPOSE" ]; then
    if docker compose version &>/dev/null; then
        COMPOSE="docker compose"
    else
        echo "❌ Docker Compose не установлен. Устанавливаем..."
        sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
        sudo chmod +x /usr/local/bin/docker-compose
        COMPOSE="docker-compose"
        echo "✅ Docker Compose установлен"
    fi
fi

# Проверяем переменные окружения
read -p "Введите домен для сайта (по умолчанию mtflux.ru): " DOMAIN
DOMAIN=${DOMAIN:-mtflux.ru}
read -p "Использовать SSL? (y/n): " USE_SSL

# Останавливаем предыдущие контейнеры
echo "🛑 Остановка предыдущих контейнеров..."
$COMPOSE -f docker-compose.simple.yml down 2>/dev/null || true
$COMPOSE -f docker-compose.prod.yml down 2>/dev/null || true
$COMPOSE down 2>/dev/null || true

# Выбираем конфигурацию
if [ "$USE_SSL" = "y" ] || [ "$USE_SSL" = "Y" ]; then
    echo "🔒 Используем конфигурацию с SSL..."
    COMPOSE_FILE="docker-compose.prod.yml"
    
    # Создаем директорию для SSL сертификатов
    mkdir -p ssl
    
    if [ ! -f "ssl/cert.pem" ] || [ ! -f "ssl/key.pem" ]; then
        echo "⚠️  SSL сертификаты не найдены в папке ssl/"
        echo "Создайте самоподписанный сертификат или добавьте ваши сертификаты:"
        echo "  ssl/cert.pem - сертификат"
        echo "  ssl/key.pem - приватный ключ"
        
        read -p "Создать самоподписанный сертификат? (y/n): " CREATE_SELF_SIGNED
        
        if [ "$CREATE_SELF_SIGNED" = "y" ] || [ "$CREATE_SELF_SIGNED" = "Y" ]; then
            openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
                -keyout ssl/key.pem \
                -out ssl/cert.pem \
                -subj "/C=RU/ST=State/L=City/O=MetaFlux/CN=$DOMAIN"
            echo "✅ Самоподписанный сертификат создан для $DOMAIN"
        else
            echo "❌ SSL сертификаты необходимы для продакшн конфигурации"
            exit 1
        fi
    fi
else
    echo "🌐 Используем простую конфигурацию без SSL..."
    COMPOSE_FILE="docker-compose.simple.yml"
fi

mkdir -p certbot/www

# Собираем и запускаем приложение
echo "🏗️  Сборка и запуск приложения..."
$COMPOSE -f $COMPOSE_FILE up -d --build

# Ждем запуска приложения
echo "⏳ Ожидание запуска приложения..."
for i in $(seq 1 30); do
    if $COMPOSE -f $COMPOSE_FILE ps 2>/dev/null | grep -qE 'healthy|Up'; then
        sleep 3
        break
    fi
    sleep 2
done

# Проверяем статус
echo "📊 Проверка статуса контейнеров..."
$COMPOSE -f $COMPOSE_FILE ps

NGINX_ERR="$($COMPOSE -f $COMPOSE_FILE logs nginx --tail=50 2>/dev/null | grep -E '\[emerg\]|\[alert\]|\[error\]' || true)"
if [ -n "$NGINX_ERR" ]; then
    echo "❌ Nginx сообщил об ошибке:"
    echo "$NGINX_ERR"
    exit 1
fi

echo "📋 Последние логи приложения:"
$COMPOSE -f $COMPOSE_FILE logs metaflux --tail=15

echo ""
echo "🎉 Развертывание завершено!"
echo "📱 Приложение доступно по адресу:"
if [ "$USE_SSL" = "y" ] || [ "$USE_SSL" = "Y" ]; then
    echo "   https://$DOMAIN"
    echo "   https://www.$DOMAIN"
else
    echo "   http://$DOMAIN"
    echo "   http://www.$DOMAIN"
fi
echo ""
echo "🔧 Полезные команды:"
echo "   Просмотр логов: $COMPOSE -f $COMPOSE_FILE logs -f"
echo "   Остановка: $COMPOSE -f $COMPOSE_FILE down"
echo "   Перезапуск: $COMPOSE -f $COMPOSE_FILE restart"
echo "   Обновление: git pull && $COMPOSE -f $COMPOSE_FILE up -d --build"
