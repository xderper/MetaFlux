#!/bin/bash

# Скрипт для полной очистки и пересборки проекта на VPS
# Использование: bash clean-rebuild.sh

set -e

echo "🚀 Начинаем полную очистку и пересборку проекта..."

# Цвета для вывода
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Функция для вывода цветного текста
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

# 1. Остановка всех Docker контейнеров
print_status "Останавливаем все Docker контейнеры..."
docker stop $(docker ps -aq) 2>/dev/null || print_warning "Нет запущенных контейнеров"

# 2. Удаление всех контейнеров
print_status "Удаляем все Docker контейнеры..."
docker rm $(docker ps -aq) 2>/dev/null || print_warning "Нет контейнеров для удаления"

# 3. Удаление Docker образов проекта
print_status "Удаляем Docker образы проекта..."
docker images | grep -E "(5|metaflux|none)" | awk '{print $3}' | xargs docker rmi -f 2>/dev/null || print_warning "Нет образов проекта для удаления"

# 4. Очистка Docker volumes
print_status "Очищаем Docker volumes..."
docker volume prune -f

# 5. Очистка Docker networks
print_status "Очищаем неиспользуемые Docker networks..."
docker network prune -f

# 6. Полная очистка Docker системы
print_status "Выполняем полную очистку Docker системы..."
docker system prune -af --volumes

# 7. Очистка npm кеша
print_status "Очищаем npm кеш..."
npm cache clean --force 2>/dev/null || print_warning "npm не найден или кеш уже чист"

# 8. Удаление node_modules и package-lock.json
print_status "Удаляем node_modules и package-lock.json..."
rm -rf node_modules
rm -f package-lock.json

# 9. Очистка Next.js кеша
print_status "Очищаем кеш Next.js..."
rm -rf .next
rm -rf out

# 10. Очистка других кешей
print_status "Очищаем другие временные файлы..."
rm -rf .cache
rm -rf dist
rm -rf build

# 11. Установка зависимостей заново
print_status "Устанавливаем зависимости заново..."
npm install

# 12. Сборка Docker образов заново
print_status "Собираем Docker образы заново..."

# Проверяем какой docker-compose файл использовать
if [ -f "docker-compose.prod.yml" ]; then
    print_status "Используем production конфигурацию..."
    docker-compose -f docker-compose.prod.yml build --no-cache
    print_status "Запускаем production контейнеры..."
    docker-compose -f docker-compose.prod.yml up -d
elif [ -f "docker-compose.simple.yml" ]; then
    print_status "Используем simple конфигурацию..."
    docker-compose -f docker-compose.simple.yml build --no-cache
    print_status "Запускаем simple контейнеры..."
    docker-compose -f docker-compose.simple.yml up -d
elif [ -f "docker-compose.yml" ]; then
    print_status "Используем стандартную конфигурацию..."
    docker-compose build --no-cache
    print_status "Запускаем стандартные контейнеры..."
    docker-compose up -d
else
    print_error "Не найден файл docker-compose!"
    exit 1
fi

# 13. Проверка статуса контейнеров
print_status "Проверяем статус контейнеров..."
sleep 10
docker ps

# 14. Показываем логи
print_status "Показываем последние логи..."
docker-compose logs --tail=50

# 15. Проверка свободного места
print_status "Проверяем свободное место на диске..."
df -h

print_success "✅ Полная очистка и пересборка завершена!"
print_success "🔗 Проект должен быть доступен по настроенному адресу"

echo ""
echo "📋 Что было выполнено:"
echo "   • Остановлены все Docker контейнеры"
echo "   • Удалены все контейнеры и образы"
echo "   • Очищены volumes и networks"
echo "   • Очищен npm кеш"
echo "   • Удалены node_modules и .next"
echo "   • Переустановлены зависимости"
echo "   • Пересобраны Docker образы без кеша"
echo "   • Запущены новые контейнеры"
echo ""
echo "💡 Для просмотра логов: docker-compose logs -f"
echo "💡 Для остановки: docker-compose down" 