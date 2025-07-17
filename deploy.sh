#!/bin/bash

# Скрипт для развертывания MetaFlux на VPS
set -e

echo "🚀 Развертывание MetaFlux на VPS..."

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
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose не установлен. Устанавливаем..."
    sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
    echo "✅ Docker Compose установлен"
fi

# Проверяем переменные окружения
read -p "Введите домен для сайта (по умолчанию mtflux.ru): " DOMAIN
DOMAIN=${DOMAIN:-mtflux.ru}
read -p "Использовать SSL? (y/n): " USE_SSL

# Останавливаем предыдущие контейнеры
echo "🛑 Остановка предыдущих контейнеров..."
docker-compose down 2>/dev/null || true

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

# Собираем и запускаем приложение
echo "🏗️  Сборка и запуск приложения..."
docker-compose -f $COMPOSE_FILE up -d --build

# Ждем запуска приложения
echo "⏳ Ожидание запуска приложения..."
sleep 30

# Проверяем статус
echo "📊 Проверка статуса контейнеров..."
docker-compose -f $COMPOSE_FILE ps

# Показываем логи
echo "📋 Последние логи:"
docker-compose -f $COMPOSE_FILE logs --tail=20

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
echo "   Просмотр логов: docker-compose -f $COMPOSE_FILE logs -f"
echo "   Остановка: docker-compose -f $COMPOSE_FILE down"
echo "   Перезапуск: docker-compose -f $COMPOSE_FILE restart"
echo "   Обновление: git pull && docker-compose -f $COMPOSE_FILE up -d --build" 