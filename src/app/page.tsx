'use client';
import Image from "next/image";
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, Users, Zap, Award } from 'lucide-react';
import Link from 'next/link';
import AnimatedBackground from '../components/AnimatedBackground';
import VideoSection from '../components/VideoSection';
import PhotoGallery from '../components/PhotoGallery';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 text-gray-900 relative">
      <AnimatedBackground />
      
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center shadow-lg">
              <span className="text-2xl font-bold text-white tracking-tight">M</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">MetaFlux</span>
          </motion.div>
          <nav className="hidden md:flex gap-8 text-base font-medium text-gray-600">
            <Link href="/about" className="hover:text-purple-600 transition-colors duration-300">О нас</Link>
            <Link href="/services" className="hover:text-purple-600 transition-colors duration-300">Услуги</Link>
            <Link href="/portfolio" className="hover:text-purple-600 transition-colors duration-300">Портфолио</Link>
            <Link href="/team" className="hover:text-purple-600 transition-colors duration-300">Команда</Link>
            <Link href="/blog" className="hover:text-purple-600 transition-colors duration-300">Блог</Link>
          </nav>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors duration-300"
          >
            Начать проект
          </motion.button>
          <button className="md:hidden w-8 h-8 flex flex-col justify-center gap-1">
            <span className="w-full h-0.5 bg-gray-600 rounded"></span>
            <span className="w-full h-0.5 bg-gray-600 rounded"></span>
            <span className="w-full h-0.5 bg-gray-600 rounded"></span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
          >
            Elevating Business and
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Framing Experience
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Отправляйтесь в путешествие по созданию вашего MVP с передовым UI дизайном.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gray-900 text-white rounded-full font-semibold text-lg hover:bg-gray-800 transition-all duration-300 shadow-xl"
            >
              Забронировать звонок
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, borderColor: "#8b5cf6", color: "#8b5cf6" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold text-lg transition-all duration-300"
            >
              Наши кейсы
            </motion.button>
          </motion.div>
        </div>

        {/* Client Logos */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-full max-w-6xl px-6"
        >
          <div className="flex justify-center items-center gap-8 md:gap-12 opacity-40 grayscale">
            {['Gallery Artisan', 'SnapShot', 'ProNature', 'Network', 'Waveless', 'akacollective'].map((logo, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="text-gray-500 font-medium text-sm md:text-base whitespace-nowrap"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Hero Visual Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Mockup Container */}
            <div className="relative bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-3xl p-8 md:p-16 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/90 to-pink-600/90 backdrop-blur-sm"></div>
              
              {/* Laptop Mockup */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-10 max-w-4xl mx-auto"
              >
                <div className="bg-gray-900 rounded-2xl p-2 shadow-2xl transform perspective-1000 rotate-y-5">
                  <div className="bg-white rounded-xl overflow-hidden">
                    <div className="bg-gray-100 px-4 py-3 flex items-center gap-2">
                      <div className="flex gap-1">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-gray-500 ml-4">
                        galleryartisan.com
                      </div>
                    </div>
                    <div className="p-8 bg-white text-center">
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Gallery Artisan</h3>
                        <div className="flex justify-center gap-4 text-sm text-gray-600">
                          <span>ГЛАВНАЯ</span>
                          <span>ИСТОРИЯ</span>
                          <span>ХУДОЖНИК</span>
                          <span>ГАЛЕРЕЯ</span>
                          <span>ПРЕСС-РЕЛИЗ</span>
                          <span>КОНТАКТЫ</span>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                          ПОГРУЗИТЕСЬ В ЦИФРОВУЮ
                          <br />
                          ГАЛЕРЕЮ СОВРЕМЕННОГО
                          <br />
                          ТВОРЧЕСТВА И ИННОВАЦИЙ.
                        </h2>
                        <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto">
                          <div className="w-0 h-0 border-l-6 border-l-white border-y-4 border-y-transparent ml-1"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Landing Page Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-6 py-3 shadow-lg flex items-center gap-3"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">e</span>
                </div>
                <span className="font-bold text-gray-900">Лендинг</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Почему выбирают
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {" "}нас
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы объединяем креативность, технологии и стратегию для создания выдающихся результатов
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Zap,
                title: "Молниеносная разработка",
                description: "Быстрые итерации и короткие циклы разработки для максимальной эффективности",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: Star,
                title: "Премиум дизайн",
                description: "Уникальные и современные решения, которые выделят ваш бренд среди конкурентов",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: Award,
                title: "Результаты мирового класса",
                description: "Проекты, которые получают награды и признание в индустрии",
                color: "from-blue-500 to-cyan-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="text-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <VideoSection />

      {/* Photo Gallery */}
      <PhotoGallery />

      {/* 3D Cards Grid Section - Enhanced */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Наши
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}услуги
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Полный спектр digital-решений для вашего бизнеса
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Создайте собственный продукт с кастомным приложением",
                gradient: "from-blue-500 to-cyan-400",
                shape: "rounded-3xl"
              },
              {
                title: "Цветные формы делают дизайн особенным",
                gradient: "from-green-400 to-blue-500",
                shape: "rounded-full"
              },
              {
                title: "Креативные идеи дизайна развивают ваш бизнес",
                gradient: "from-purple-500 to-pink-500",
                shape: "rounded-2xl"
              },
              {
                title: "Всё что нужно для запуска и ведения бизнеса",
                gradient: "from-red-500 to-orange-400",
                shape: "rounded-3xl"
              },
              {
                title: "Воплощаем ваши идеи в реальность со страстью",
                gradient: "from-yellow-400 to-orange-500",
                shape: "rounded-full"
              },
              {
                title: "Профессиональные услуги для роста бизнеса",
                gradient: "from-indigo-500 to-purple-600",
                shape: "rounded-2xl"
              }
            ].map((card, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-500"
              >
                {/* 3D Shape */}
                <div className="relative mb-6 h-32 flex items-center justify-center">
                  <motion.div 
                    animate={{ 
                      rotateY: [0, 360],
                      rotateX: [0, 10, 0]
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className={`w-24 h-24 bg-gradient-to-br ${card.gradient} ${card.shape} opacity-80 group-hover:opacity-100 transition-opacity duration-500`}
                  ></motion.div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                  {card.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-6">
                  Идеи, которые улучшают ваш продукт и развивают бизнес.
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full border-2 border-gray-800"></div>
                    ))}
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.1, backgroundColor: '#8b5cf6' }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Готовы начать ваш
              <br />
              следующий проект?
            </h2>
            <p className="text-xl text-white/90 mb-12">
              Свяжитесь с нами сегодня и давайте создадим что-то удивительное вместе
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
              >
                Начать проект
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                <Play className="w-5 h-5" />
                Смотреть демо
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
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
                  <div key={i} className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                    <span className="text-sm font-bold">{social}</span>
                  </div>
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
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 MetaFlux. Все права защищены.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
