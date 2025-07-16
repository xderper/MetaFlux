'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center shadow-lg">
              <span className="text-2xl font-bold text-white tracking-tight">M</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">MetaFlux</span>
          </Link>
        </motion.div>
        <nav className="hidden md:flex gap-8 text-base font-medium text-gray-600">
          <Link href="/about" className="hover:text-purple-600 transition-colors duration-300">О нас</Link>
          <Link href="/services" className="hover:text-purple-600 transition-colors duration-300">Услуги</Link>
          <Link href="/portfolio" className="hover:text-purple-600 transition-colors duration-300">Портфолио</Link>
        </nav>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors duration-300"
        >
          Связаться с нами
        </motion.button>
        <button className="md:hidden w-8 h-8 flex flex-col justify-center gap-1">
          <span className="w-full h-0.5 bg-gray-600 rounded"></span>
          <span className="w-full h-0.5 bg-gray-600 rounded"></span>
          <span className="w-full h-0.5 bg-gray-600 rounded"></span>
        </button>
      </div>
    </header>
  );
} 