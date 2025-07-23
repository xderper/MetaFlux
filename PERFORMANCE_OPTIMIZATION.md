# Оптимизация производительности для мобильных устройств

## 📱 Проблема
Анимации на мобильных устройствах работали медленно и не плавно из-за:
- Большого количества частиц в анимации фона (50 на десктопе, 20 на мобильном)
- Затратных blur эффектов на больших элементах
- Сложных комбинированных анимаций (scale + rotate + translate одновременно)
- Недостаточной оптимизации для слабых устройств

## ✅ Реализованные оптимизации

### 1. AnimatedBackground.tsx
```typescript
// ❌ До оптимизации
const particleCount = isMobile ? 20 : 50;

// ✅ После оптимизации
const particleCount = useMemo(() => {
  if (prefersReducedMotion) return 0;
  if (isLowPerformance) return 3; // Минимум для слабых устройств
  if (isMobile) return 8; // Уменьшено для мобильных
  return 25; // Уменьшено для десктопа
}, [isMobile, isLowPerformance, prefersReducedMotion]);
```

**Определение слабых устройств:**
- Мобильные устройства (ширина ≤ 768px)
- CPU с ≤4 ядрами
- RAM ≤4GB (если доступно)
- Очень маленькие экраны (≤480px)
- Пользователи с prefers-reduced-motion

### 2. Упрощение анимаций

**Для слабых устройств:**
- Только opacity анимации вместо сложных трансформаций
- Уменьшенные blur эффекты (`blur-xl` вместо `blur-3xl`)
- Отключение частиц полностью

**Для мобильных:**
- Упрощенные анимации орбов (только scale)
- Меньшие размеры элементов
- Более медленные анимации

### 3. CSS оптимизации

```css
/* Force GPU acceleration */
.animate-floating,
.animate-pulse-glow {
  transform: translateZ(0);
  will-change: transform;
}

/* Performance-based classes */
.low-performance {
  .animate-floating {
    animation: none !important;
  }
  
  .backdrop-blur-xl {
    backdrop-filter: blur(8px) !important;
  }
}
```

### 4. Next.js конфигурация

```typescript
// Разделение chunks для лучшей загрузки
splitChunks: {
  cacheGroups: {
    framerMotion: {
      test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
      name: 'framer-motion',
      chunks: 'all',
      priority: 20,
    },
    vendor: {
      maxSize: 100000, // 100KB максимум для мобильных
    },
  },
}
```

## 🛠 Компонент мониторинга производительности

### usePerformanceMonitor Hook
```typescript
const { isLowPerformance, isMobile, reducedMotion } = usePerformanceMonitor();
```

Автоматически определяет:
- Тип устройства
- Производительность CPU/RAM
- Предпочтения пользователя
- Размер экрана

### PerformanceAwareMotion Wrapper
```typescript
<PerformanceAwareMotion threshold="medium" fallback={<StaticComponent />}>
  <ExpensiveAnimation />
</PerformanceAwareMotion>
```

## 📋 Рекомендации для разработчиков

### ✅ DO (Делать)
1. **Тестируйте на реальных мобильных устройствах**
   - Используйте throttling в DevTools
   - Тестируйте на слабых Android устройствах

2. **Используйте CSS custom properties для адаптивных анимаций**
   ```css
   animation-duration: var(--animation-duration-normal);
   backdrop-filter: var(--blur-medium);
   ```

3. **Применяйте GPU ускорение правильно**
   ```css
   transform: translateZ(0); /* Force layer */
   will-change: transform; /* Only when animating */
   ```

4. **Проверяйте предпочтения пользователя**
   ```css
   @media (prefers-reduced-motion: reduce) {
     * { animation: none !important; }
   }
   ```

### ❌ DON'T (Не делать)
1. **Не используйте blur > 16px на мобильных**
2. **Не анимируйте больше 10 элементов одновременно**
3. **Не комбинируйте сложные трансформации**
4. **Не игнорируйте will-change после анимации**

## 🔍 Дебаг и мониторинг

### Включение debug режима
```typescript
<PerformanceMonitor showDebug={true} />
```

### Анализ производительности
```bash
# Анализ bundle size
npm run build
npm run analyze

# Lighthouse audit
npm run lighthouse
```

### DevTools профилирование
1. Performance tab → Record
2. Проверить FPS во время анимаций
3. Искать layout thrashing
4. Мониторить memory usage

## 📊 Результаты оптимизации

### До оптимизации
- 🔴 50 частиц на десктопе, 20 на мобильном
- 🔴 blur-3xl на больших элементах
- 🔴 Сложные комбинированные анимации
- 🔴 Нет определения слабых устройств

### После оптимизации
- 🟢 3-25 частиц в зависимости от устройства
- 🟢 Адаптивные blur эффекты
- 🟢 Упрощенные анимации для мобильных
- 🟢 Автоматическое определение производительности

## 🚀 Дополнительные возможности

### Lazy loading анимаций
```typescript
const MotionComponent = lazy(() => import('./MotionComponent'));

<Suspense fallback={<StaticComponent />}>
  {!isLowPerformance && <MotionComponent />}
</Suspense>
```

### Conditional animation libraries
```typescript
// Загружать framer-motion только для мощных устройств
const motion = isLowPerformance ? 
  await import('./static-motion') : 
  await import('framer-motion');
```

### Progressive enhancement
```typescript
// Начинать с простых CSS анимаций
useEffect(() => {
  if (!isLowPerformance) {
    import('./enhanced-animations');
  }
}, [isLowPerformance]);
```

## 📱 Тестирование

### Обязательные проверки
- [ ] iPhone SE (375px width)
- [ ] Android с 2GB RAM
- [ ] Throttled CPU (4x slowdown)
- [ ] prefers-reduced-motion: reduce
- [ ] Медленное 3G соединение

### Целевые метрики
- First Contentful Paint < 1.5s
- Largest Contentful Paint < 2.5s
- Cumulative Layout Shift < 0.1
- First Input Delay < 100ms
- Animation FPS > 30fps 