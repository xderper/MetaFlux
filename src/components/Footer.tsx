'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center p-1.5 sm:p-2">
                <Image 
                  src="/icon.png" 
                  alt="MetaFlux Logo" 
                  width={24} 
                  height={24} 
                  className="w-full h-full object-contain filter brightness-0 invert"
                />
              </div>
              <span className="text-lg sm:text-xl font-bold">MetaFlux</span>
            </div>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              Создаём цифровое будущее для вашего бизнеса
            </p>
          </div>
          
          {[
            {
              title: "Услуги",
              links: [
                { name: "Веб-дизайн", href: "/services" },
                { name: "Мобильные приложения", href: "/services" },
                { name: "Брендинг", href: "/services" },
                { name: "UX/UI дизайн", href: "/services" }
              ]
            },
            {
              title: "Компания",
              links: [
                { name: "О нас", href: "/about" },
                { name: "Услуги", href: "/services" },
                { name: "Портфолио", href: "/portfolio" }
              ]
            }
          ].map((column, index) => (
            <div key={index} className="min-h-[120px]">
              <h3 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href}>
                      <motion.span 
                        whileHover={{ x: 5, color: '#a855f7' }}
                        className="text-gray-400 hover:text-purple-400 transition-all duration-300 cursor-pointer inline-block text-sm sm:text-base"
                      >
                        {link.name}
                      </motion.span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
            © 2024 MetaFlux. Все права защищены.
          </p>
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
            <motion.a whileHover={{ color: '#a855f7' }} href="#" className="hover:text-purple-400 transition-colors">
              Политика конфиденциальности
            </motion.a>
            <motion.a whileHover={{ color: '#a855f7' }} href="#" className="hover:text-purple-400 transition-colors">
              Условия использования
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
} 