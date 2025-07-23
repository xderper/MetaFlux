'use client';
import { motion } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';

export default function AnimatedBackground() {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  const [isMobile, setIsMobile] = useState(false);
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
      setIsMobile(window.innerWidth <= 768);

      // Check for reduced motion preference
      setPrefersReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);

      // Set mounted to true after first render
      setIsMounted(true);

      const handleResize = () => {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight
        });
        setIsMobile(window.innerWidth <= 768);
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  // Pre-generate random values to avoid hydration mismatch
  const particleCount = isMobile ? 20 : 50;
  const particleData = useMemo(() => {
    if (!isMounted) {
      // Return empty array on server/before mount to prevent hydration issues
      return [];
    }
    return Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      initialX: Math.random() * dimensions.width,
      initialY: Math.random() * dimensions.height,
      animateX: Math.random() * dimensions.width,
      animateY: Math.random() * dimensions.height,
      duration: Math.random() * 20 + 10,
    }));
  }, [particleCount, dimensions.width, dimensions.height, isMounted]);

  // Always render the container to prevent hydration mismatch
  // But only show animations after mounting
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Always render static gradient orbs to prevent hydration mismatch */}
      <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-purple-400/15 to-pink-400/15 sm:from-purple-400/20 sm:to-pink-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-r from-blue-400/15 to-cyan-400/15 sm:from-blue-400/20 sm:to-cyan-400/20 rounded-full blur-3xl" />
      
      {/* Only render animated content after mounting and if motion is allowed */}
      {isMounted && !prefersReducedMotion && (
        <>
          {/* Floating particles */}
          {particleData.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full opacity-20 sm:opacity-30"
              initial={{
                x: particle.initialX,
                y: particle.initialY,
              }}
              animate={{
                x: particle.animateX,
                y: particle.animateY,
              }}
              transition={{
                duration: isMobile ? 25 : particle.duration,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
            />
          ))}
          
          {/* Animated gradient orbs - replace static ones with animated versions */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-purple-400/15 to-pink-400/15 sm:from-purple-400/20 sm:to-pink-400/20 rounded-full blur-3xl"
            animate={isMobile ? {
              scale: [1, 1.2, 1],
            } : {
              scale: [1, 1.5, 1],
              rotate: [0, 180, 360],
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: isMobile ? 10 : 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-r from-blue-400/15 to-cyan-400/15 sm:from-blue-400/20 sm:to-cyan-400/20 rounded-full blur-3xl"
            animate={isMobile ? {
              scale: [1, 1.1, 1],
            } : {
              scale: [1.2, 0.8, 1.2],
              rotate: [360, 180, 0],
              x: [0, -150, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: isMobile ? 12 : 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </>
      )}
    </div>
  );
} 