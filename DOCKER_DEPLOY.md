# 🚀 Развертывание MetaFlux с Docker

Полное руководство по развертыванию Next.js приложения MetaFlux на VPS с помощью Docker.

## 📋 Предварительные требования

- VPS с Ubuntu/Debian
- Доступ по SSH
- Git установлен на сервере

## ⚡ Быстрое развертывание

### 1. Клонирование репозитория
```bash
git clone https://github.com/YOUR_USERNAME/metaflux.git
cd metaflux
```

### 2. Автоматическое развертывание
```bash
./deploy.sh
```

Скрипт автоматически:
- Установит Docker и Docker Compose (если не установлены)
- Выберет конфигурацию (с SSL или без)
- Соберет и запустит приложение
- Покажет статус развертывания

## 🔧 Ручное развертывание

### Вариант 1: Простое развертывание (без SSL)
```bash
# Сборка и запуск
docker-compose -f docker-compose.simple.yml up -d --build

# Приложение будет доступно на http://mtflux.ru:80
```

### Вариант 2: Только Next.js (разработка)
```bash
# Сборка и запуск только Next.js
docker-compose up -d --build

# Приложение будет доступно на http://your-domain:3000
```

### Вариант 3: Продакшн с SSL
```bash
# 1. Создайте папку для SSL сертификатов
mkdir ssl

# 2. Добавьте ваши сертификаты:
# ssl/cert.pem - сертификат
# ssl/key.pem - приватный ключ

# 3. Или создайте самоподписанный сертификат:
openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
  -keyout ssl/key.pem \
  -out ssl/cert.pem \
  -subj "/C=RU/ST=State/L=City/O=MetaFlux/CN=mtflux.ru"

# 4. Запустите продакшн конфигурацию
docker-compose -f docker-compose.prod.yml up -d --build
```

## 📁 Структура файлов

```
.
├── Dockerfile                 # Основной Dockerfile для Next.js
├── docker-compose.yml         # Простая конфигурация (только Next.js)
├── docker-compose.simple.yml  # С nginx без SSL
├── docker-compose.prod.yml    # Продакшн с nginx и SSL
├── nginx.simple.conf          # Nginx без SSL
├── nginx.conf                 # Nginx с SSL
├── .dockerignore              # Исключения для Docker
├── deploy.sh                  # Скрипт автоматического развертывания
└── ssl/                       # SSL сертификаты (создается автоматически)
    ├── cert.pem
    └── key.pem
```

## 🛠️ Полезные команды

### Просмотр логов
```bash
# Все логи
docker-compose logs -f

# Логи конкретного сервиса
docker-compose logs -f metaflux
docker-compose logs -f nginx
```

### Управление контейнерами
```bash
# Остановка
docker-compose down

# Перезапуск
docker-compose restart

# Пересборка
docker-compose up -d --build

# Проверка статуса
docker-compose ps
```

### Обновление приложения
```bash
git pull
docker-compose up -d --build
```

### Очистка Docker
```bash
# Удаление неиспользуемых образов
docker image prune -f

# Полная очистка
docker system prune -af
```

## 🔒 SSL сертификаты

### Let's Encrypt (рекомендуется)
```bash
# Установка certbot
sudo apt update
sudo apt install certbot

# Получение сертификата
sudo certbot certonly --standalone -d mtflux.ru -d www.mtflux.ru

# Копирование сертификатов
sudo cp /etc/letsencrypt/live/mtflux.ru/fullchain.pem ssl/cert.pem
sudo cp /etc/letsencrypt/live/mtflux.ru/privkey.pem ssl/key.pem
sudo chown $USER:$USER ssl/*.pem
```

### Автообновление Let's Encrypt
```bash
# Создайте скрипт обновления
cat > renew-ssl.sh << 'EOF'
#!/bin/bash
sudo certbot renew --quiet
sudo cp /etc/letsencrypt/live/mtflux.ru/fullchain.pem ssl/cert.pem
sudo cp /etc/letsencrypt/live/mtflux.ru/privkey.pem ssl/key.pem
sudo chown $USER:$USER ssl/*.pem
docker-compose -f docker-compose.prod.yml restart nginx
EOF

chmod +x renew-ssl.sh

# Добавьте в crontab для автообновления
(crontab -l 2>/dev/null; echo "0 2 * * 1 /path/to/your/project/renew-ssl.sh") | crontab -
```

## 🌐 Настройка домена

1. Настройте A-записи в DNS:
   ```
   A record: mtflux.ru -> IP_ADDRESS_VPS
   A record: www.mtflux.ru -> IP_ADDRESS_VPS
   ```

2. Nginx конфигурация уже настроена для домена mtflux.ru
   ```bash
   # В nginx.conf уже указано:
   server_name mtflux.ru www.mtflux.ru;
   ```

## 🔧 Настройка производительности

### Оптимизация ресурсов
```yaml
# В docker-compose файлах можно добавить лимиты
services:
  metaflux:
    deploy:
      resources:
        limits:
          memory: 512M
        reservations:
          memory: 256M
```

### Мониторинг
```bash
# Мониторинг ресурсов
docker stats

# Мониторинг дискового пространства
docker system df
```

## 🚨 Устранение неполадок

### Проблемы с портами
```bash
# Проверка занятых портов
sudo netstat -tlnp | grep :80
sudo netstat -tlnp | grep :443

# Освобождение порта
sudo fuser -k 80/tcp
```

### Проблемы с правами доступа
```bash
# Исправление прав на SSL файлы
sudo chown $USER:$USER ssl/*.pem
chmod 600 ssl/*.pem
```

### Проблемы с памятью
```bash
# Очистка Docker кэша
docker system prune -af

# Увеличение swap (если необходимо)
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
```

## 📞 Поддержка

При возникновении проблем:
1. Проверьте логи: `docker-compose logs -f`
2. Проверьте статус: `docker-compose ps`
3. Проверьте доступность портов: `sudo netstat -tlnp`
4. Проверьте свободное место: `df -h`

---

✨ **Готово!** Ваше приложение MetaFlux развернуто и готово к работе! 