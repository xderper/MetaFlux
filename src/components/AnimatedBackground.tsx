'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AnimatedBackground() {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

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

  // Don't render complex animations on mobile or if user prefers reduced motion
  if (prefersReducedMotion) {
    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Simple static gradient orbs for reduced motion */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl" />
      </div>
    );
  }

  // Reduce particle count on mobile
  const particleCount = isMobile ? 20 : 50;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating particles - fewer on mobile */}
      {Array.from({ length: particleCount }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full opacity-20 sm:opacity-30"
          initial={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
          }}
          animate={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
          }}
          transition={{
            duration: isMobile ? 25 : Math.random() * 20 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        />
      ))}
      
      {/* Animated gradient orbs - simpler animations on mobile */}
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
    </div>
  );
} 