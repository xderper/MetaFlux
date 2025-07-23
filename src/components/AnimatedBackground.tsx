'use client';
import { motion } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';

export default function AnimatedBackground() {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  const [isMobile, setIsMobile] = useState(false);
  const [isLowPerformance, setIsLowPerformance] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });

      // Check if device is mobile
      const isMobileDevice = window.innerWidth <= 768;
      setIsMobile(isMobileDevice);

      // Detect low performance devices
      const isSlowDevice = 
        isMobileDevice || // All mobile devices
        navigator.hardwareConcurrency <= 4 || // Low CPU cores
        navigator.deviceMemory <= 4 || // Low RAM (if available)
        window.innerWidth <= 480; // Very small screens
      
      setIsLowPerformance(isSlowDevice);

      // Check for reduced motion preference
      setPrefersReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);

      // Set mounted to true after first render
      setIsMounted(true);

      const handleResize = () => {
        const newWidth = window.innerWidth;
        const newHeight = window.innerHeight;
        setDimensions({
          width: newWidth,
          height: newHeight
        });
        const newIsMobile = newWidth <= 768;
        setIsMobile(newIsMobile);
        setIsLowPerformance(
          newIsMobile || 
          navigator.hardwareConcurrency <= 4 || 
          navigator.deviceMemory <= 4 || 
          newWidth <= 480
        );
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  // Pre-generate random values to avoid hydration mismatch
  const particleCount = useMemo(() => {
    if (prefersReducedMotion) return 0;
    if (isLowPerformance) return 3; // Minimal particles for low-end devices
    if (isMobile) return 8; // Reduced for mobile
    return 25; // Reduced for desktop
  }, [isMobile, isLowPerformance, prefersReducedMotion]);

  const particleData = useMemo(() => {
    if (!isMounted || particleCount === 0) {
      // Return empty array on server/before mount to prevent hydration issues
      return [];
    }
    return Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      initialX: Math.random() * dimensions.width,
      initialY: Math.random() * dimensions.height,
      animateX: Math.random() * dimensions.width,
      animateY: Math.random() * dimensions.height,
      duration: Math.random() * 10 + 15, // Slower animations
    }));
  }, [particleCount, dimensions.width, dimensions.height, isMounted]);

  // Always render the container to prevent hydration mismatch
  // But only show animations after mounting
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Always render static gradient orbs to prevent hydration mismatch */}
      <div className={`absolute top-1/4 left-1/4 w-32 sm:w-48 md:w-64 lg:w-96 h-32 sm:h-48 md:h-64 lg:h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 sm:from-purple-400/15 sm:to-pink-400/15 md:from-purple-400/20 md:to-pink-400/20 rounded-full ${isLowPerformance ? 'blur-xl' : 'blur-2xl md:blur-3xl'}`} />
      <div className={`absolute bottom-1/4 right-1/4 w-24 sm:w-32 md:w-48 lg:w-64 h-24 sm:h-32 md:h-48 lg:h-64 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 sm:from-blue-400/15 sm:to-cyan-400/15 md:from-blue-400/20 md:to-cyan-400/20 rounded-full ${isLowPerformance ? 'blur-xl' : 'blur-2xl md:blur-3xl'}`} />
      
      {/* Only render animated content after mounting and if motion is allowed */}
      {isMounted && !prefersReducedMotion && (
        <>
          {/* Floating particles - only if not low performance */}
          {!isLowPerformance && particleData.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 md:w-2 md:h-2 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full opacity-10 sm:opacity-20 md:opacity-30"
              initial={{
                x: particle.initialX,
                y: particle.initialY,
              }}
              animate={{
                x: particle.animateX,
                y: particle.animateY,
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
              style={{
                willChange: 'transform', // Optimize for GPU
                transform: 'translateZ(0)', // Force GPU acceleration
              }}
            />
          ))}
          
          {/* Animated gradient orbs - simplified animations for mobile */}
          {!isLowPerformance ? (
            // Full animations for powerful devices
            <>
              <motion.div
                className={`absolute top-1/4 left-1/4 w-32 sm:w-48 md:w-64 lg:w-96 h-32 sm:h-48 md:h-64 lg:h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 sm:from-purple-400/15 sm:to-pink-400/15 md:from-purple-400/20 md:to-pink-400/20 rounded-full ${isMobile ? 'blur-2xl' : 'blur-3xl'}`}
                animate={isMobile ? {
                  scale: [1, 1.1, 1],
                } : {
                  scale: [1, 1.3, 1],
                  rotate: [0, 120, 240, 360],
                  x: [0, 50, 0],
                  y: [0, -25, 0],
                }}
                transition={{
                  duration: isMobile ? 8 : 12,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  willChange: 'transform',
                  transform: 'translateZ(0)',
                }}
              />
              
              <motion.div
                className={`absolute bottom-1/4 right-1/4 w-24 sm:w-32 md:w-48 lg:w-64 h-24 sm:h-32 md:h-48 lg:h-64 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 sm:from-blue-400/15 sm:to-cyan-400/15 md:from-blue-400/20 md:to-cyan-400/20 rounded-full ${isMobile ? 'blur-2xl' : 'blur-3xl'}`}
                animate={isMobile ? {
                  scale: [1, 1.05, 1],
                } : {
                  scale: [1.1, 0.9, 1.1],
                  rotate: [360, 240, 120, 0],
                  x: [0, -75, 0],
                  y: [0, 50, 0],
                }}
                transition={{
                  duration: isMobile ? 10 : 16,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  willChange: 'transform',
                  transform: 'translateZ(0)',
                }}
              />
            </>
          ) : (
            // Very simple animations for low-performance devices
            <>
              <motion.div
                className="absolute top-1/4 left-1/4 w-32 sm:w-48 h-32 sm:h-48 bg-gradient-to-r from-purple-400/8 to-pink-400/8 rounded-full blur-xl"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  willChange: 'opacity',
                }}
              />
              
              <motion.div
                className="absolute bottom-1/4 right-1/4 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-r from-blue-400/8 to-cyan-400/8 rounded-full blur-xl"
                animate={{
                  opacity: [0.8, 0.5, 0.8],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  willChange: 'opacity',
                }}
              />
            </>
          )}
        </>
      )}
    </div>
  );
} 