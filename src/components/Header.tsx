'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { X, Menu } from 'lucide-react';
import { TELEGRAM } from '../config/env';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check if device is mobile
      setIsMobile(window.innerWidth <= 768);
      
      // Check for reduced motion preference
      setPrefersReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);

      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <Link href="/" className="flex items-center gap-3" onClick={closeMobileMenu}>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center shadow-lg p-2">
                <Image 
                  src="/icon.png" 
                  alt="MetaFlux Logo" 
                  width={32} 
                  height={32} 
                  className="w-full h-full object-contain filter brightness-0 invert"
                />
              </div>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">MetaFlux</span>
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 text-base font-medium text-gray-600">
            <Link href="/about" className="hover:text-purple-600 transition-colors duration-300">О нас</Link>
            <Link href="/services" className="hover:text-purple-600 transition-colors duration-300">Услуги</Link>
            <Link href="/portfolio" className="hover:text-purple-600 transition-colors duration-300">Портфолио</Link>
          </nav>
          
          {/* Desktop CTA Button */}
          <motion.a 
            href={TELEGRAM}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={!isMobile && !prefersReducedMotion ? { scale: 1.05 } : {}}
            whileTap={!isMobile && !prefersReducedMotion ? { scale: 0.95 } : {}}
            className="hidden md:block px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors duration-300 text-center"
            style={{
              willChange: !isMobile ? 'transform' : 'auto',
              transform: 'translateZ(0)'
            }}
          >
            Связаться с нами
          </motion.a>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden w-8 h-8 flex flex-col justify-center gap-1 relative z-50"
          >
            <AnimatePresence>
              {!isMobileMenuOpen ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 text-gray-600" />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-gray-600" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={closeMobileMenu}
            />
            
            {/* Mobile Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ 
                duration: prefersReducedMotion ? 0.01 : 0.2, 
                ease: 'easeOut'
              }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 md:hidden"
              style={{
                willChange: 'transform',
                transform: 'translateZ(0)'
              }}
            >
              <div className="flex flex-col h-full">
                {/* Menu Header */}
                <div className="px-6 py-8 border-b border-gray-200">
                  <Link href="/" className="flex items-center gap-3" onClick={closeMobileMenu}>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center p-2">
                      <Image 
                        src="/icon.png" 
                        alt="MetaFlux Logo" 
                        width={24} 
                        height={24} 
                        className="w-full h-full object-contain filter brightness-0 invert"
                      />
                    </div>
                    <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">MetaFlux</span>
                  </Link>
                </div>
                
                {/* Navigation Links */}
                <nav className="flex-1 px-6 py-8">
                  <div className="space-y-6">
                    {[
                      { name: 'О нас', href: '/about' },
                      { name: 'Услуги', href: '/services' },
                      { name: 'Портфолио', href: '/portfolio' }
                    ].map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={!prefersReducedMotion ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={!prefersReducedMotion ? { 
                          delay: index * 0.05 + 0.1,
                          duration: 0.2
                        } : { duration: 0.01 }}
                        style={{
                          willChange: !prefersReducedMotion ? 'transform, opacity' : 'auto',
                          transform: 'translateZ(0)'
                        }}
                      >
                        <Link 
                          href={item.href}
                          onClick={closeMobileMenu}
                          className="block text-lg font-medium text-gray-700 hover:text-purple-600 transition-colors duration-300 py-3"
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </nav>
                
                {/* Mobile CTA */}
                <div className="px-6 py-8 border-t border-gray-200">
                  <motion.a
                    href={TELEGRAM}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={!prefersReducedMotion ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={!prefersReducedMotion ? { 
                      delay: 0.3,
                      duration: 0.2
                    } : { duration: 0.01 }}
                    onClick={closeMobileMenu}
                    className="block w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl font-semibold text-center hover:shadow-lg transition-all duration-300"
                    style={{
                      willChange: !prefersReducedMotion ? 'transform, opacity' : 'auto',
                      transform: 'translateZ(0)'
                    }}
                  >
                    Связаться с нами
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
} 