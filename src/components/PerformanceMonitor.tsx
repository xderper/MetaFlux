'use client';
import { useEffect, useState } from 'react';

interface PerformanceData {
  isLowPerformance: boolean;
  isMobile: boolean;
  reducedMotion: boolean;
  hardwareConcurrency: number;
  deviceMemory: number | undefined;
}

export function usePerformanceMonitor(): PerformanceData {
  const [performanceData, setPerformanceData] = useState<PerformanceData>({
    isLowPerformance: false,
    isMobile: false,
    reducedMotion: false,
    hardwareConcurrency: 4,
    deviceMemory: undefined,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkPerformance = () => {
      const isMobile = window.innerWidth <= 768;
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const hardwareConcurrency = navigator.hardwareConcurrency || 4;
      const deviceMemory = (navigator as any).deviceMemory;
      
      // Determine if device is low performance
      const isLowPerformance = 
        isMobile ||
        hardwareConcurrency <= 4 ||
        (deviceMemory && deviceMemory <= 4) ||
        window.innerWidth <= 480 ||
        reducedMotion;

      setPerformanceData({
        isLowPerformance,
        isMobile,
        reducedMotion,
        hardwareConcurrency,
        deviceMemory,
      });

      // Set CSS custom property for performance-based styling
      document.documentElement.style.setProperty(
        '--performance-level',
        isLowPerformance ? 'low' : 'high'
      );

      // Add performance class to body
      document.body.classList.toggle('low-performance', isLowPerformance);
      document.body.classList.toggle('high-performance', !isLowPerformance);
    };

    // Initial check
    checkPerformance();

    // Listen for resize events
    window.addEventListener('resize', checkPerformance);

    // Listen for reduced motion changes
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    mediaQuery.addListener(checkPerformance);

    return () => {
      window.removeEventListener('resize', checkPerformance);
      mediaQuery.removeListener(checkPerformance);
    };
  }, []);

  return performanceData;
}

// Performance-aware motion wrapper
interface MotionWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  threshold?: 'low' | 'medium' | 'high';
}

export function PerformanceAwareMotion({ 
  children, 
  fallback, 
  threshold = 'medium' 
}: MotionWrapperProps) {
  const { isLowPerformance, reducedMotion } = usePerformanceMonitor();

  // If performance is low or user prefers reduced motion, show fallback
  if ((threshold === 'low' && isLowPerformance) || reducedMotion) {
    return <>{fallback || children}</>;
  }

  return <>{children}</>;
}

// Performance monitor component for debugging
export default function PerformanceMonitor({ showDebug = false }: { showDebug?: boolean }) {
  const performanceData = usePerformanceMonitor();

  // Don't render in production unless explicitly requested
  if (!showDebug || process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-3 rounded-lg text-xs font-mono z-[9999] max-w-xs">
      <div className="mb-2 font-semibold">Performance Monitor</div>
      <div>Mobile: {performanceData.isMobile ? 'Yes' : 'No'}</div>
      <div>Low Performance: {performanceData.isLowPerformance ? 'Yes' : 'No'}</div>
      <div>Reduced Motion: {performanceData.reducedMotion ? 'Yes' : 'No'}</div>
      <div>CPU Cores: {performanceData.hardwareConcurrency}</div>
      <div>Device Memory: {performanceData.deviceMemory || 'Unknown'} GB</div>
      <div className="mt-2 text-xs opacity-75">
        Animations: {performanceData.isLowPerformance ? 'Simplified' : 'Full'}
      </div>
    </div>
  );
} 