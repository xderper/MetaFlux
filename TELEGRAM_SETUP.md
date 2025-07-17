# Настройка Telegram для кнопок связи

## Что было изменено

Все кнопки "Связаться с нами", "Начать проект", "Обсудить проект" и "Забронировать звонок" теперь ведут на ваш Telegram.

## Настройка переменной окружения

1. Создайте файл `.env.local` в корне проекта
2. Добавьте в него следующую строку:

```
NEXT_PUBLIC_TELEGRAM=https://t.me/your_telegram_username
```

3. Замените `your_telegram_username` на ваш реальный Telegram username

## Примеры

```env
# Для пользователя @johndoe
NEXT_PUBLIC_TELEGRAM=https://t.me/johndoe

# Для группы или канала
NEXT_PUBLIC_TELEGRAM=https://t.me/your_group_name
```

## Важно

- Используйте `NEXT_PUBLIC_TELEGRAM` для клиентских компонентов
- Не забудьте добавить `.env.local` в `.gitignore` если используете приватные данные

После настройки переменной окружения все кнопки связи будут автоматически ссылаться на ваш Telegram. 