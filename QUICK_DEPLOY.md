# ⚡ Быстрое развертывание MetaFlux на mtflux.ru

## 1. Подготовка VPS

```bash
# Обновление системы
sudo apt update && sudo apt upgrade -y

# Клонирование проекта
git clone https://github.com/YOUR_USERNAME/metaflux.git
cd metaflux
```

## 2. Настройка DNS

В панели управления вашего доменного регистратора добавьте A-записи:

```
A record: mtflux.ru -> IP_ВАШЕГО_VPS
A record: www.mtflux.ru -> IP_ВАШЕГО_VPS
```

## 3. Быстрый запуск

### Вариант А: Без SSL (для тестирования)
```bash
./deploy.sh
# Выберите домен: mtflux.ru (по умолчанию)
# SSL: n

# Сайт будет доступен: http://mtflux.ru
```

### Вариант Б: С Let's Encrypt SSL (рекомендуется)
```bash
# 1. Получите SSL сертификат
sudo apt install certbot
sudo certbot certonly --standalone -d mtflux.ru -d www.mtflux.ru

# 2. Скопируйте сертификаты
mkdir ssl
sudo cp /etc/letsencrypt/live/mtflux.ru/fullchain.pem ssl/cert.pem
sudo cp /etc/letsencrypt/live/mtflux.ru/privkey.pem ssl/key.pem
sudo chown $USER:$USER ssl/*.pem

# 3. Запустите с SSL
./deploy.sh
# Выберите домен: mtflux.ru (по умолчанию)
# SSL: y

# Сайт будет доступен: https://mtflux.ru
```

## 4. Проверка

```bash
# Проверка статуса
docker-compose ps

# Просмотр логов
docker-compose logs -f

# Тест доступности
curl -I http://mtflux.ru  # или https://mtflux.ru
```

## 5. Автообновление SSL (при использовании Let's Encrypt)

```bash
# Создание скрипта автообновления
cat > renew-ssl.sh << 'EOF'
#!/bin/bash
sudo certbot renew --quiet
sudo cp /etc/letsencrypt/live/mtflux.ru/fullchain.pem ssl/cert.pem
sudo cp /etc/letsencrypt/live/mtflux.ru/privkey.pem ssl/key.pem
sudo chown $USER:$USER ssl/*.pem
docker-compose -f docker-compose.prod.yml restart nginx
EOF

chmod +x renew-ssl.sh

# Добавление в crontab (обновление каждый понедельник в 2:00)
(crontab -l 2>/dev/null; echo "0 2 * * 1 $(pwd)/renew-ssl.sh") | crontab -
```

## 6. Обновление приложения

```bash
git pull
docker-compose up -d --build
```

---

🎉 **Готово!** Ваш сайт MetaFlux развернут на домене https://mtflux.ru 