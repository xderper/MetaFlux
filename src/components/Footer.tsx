'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                <span className="text-lg font-bold text-white">M</span>
              </div>
              <span className="text-xl font-bold">MetaFlux</span>
            </div>
            <p className="text-gray-400 mb-4">
              Создаём цифровое будущее для вашего бизнеса
            </p>
            <div className="flex gap-4">
              {['tw', 'fb', 'ig', 'ln'].map((social, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ scale: 1.1, backgroundColor: '#8b5cf6' }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer"
                >
                  <span className="text-sm font-bold">{social}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          {[
            {
              title: "Услуги",
              links: ["Веб-дизайн", "Мобильные приложения", "Брендинг", "UX/UI дизайн"]
            },
            {
              title: "Компания",
              links: ["О нас", "Команда", "Карьера", "Контакты"]
            },
            {
              title: "Ресурсы",
              links: ["Блог", "Кейсы", "FAQ", "Поддержка"]
            }
          ].map((column, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, i) => (
                  <li key={i}>
                    <motion.a 
                      whileHover={{ x: 5, color: '#a855f7' }}
                      href="#" 
                      className="text-gray-400 hover:text-purple-400 transition-all duration-300"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 MetaFlux. Все права защищены.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
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