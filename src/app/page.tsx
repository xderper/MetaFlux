'use client';
import Image from "next/image";
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, Users, Zap, Award, TrendingUp, Clock, CheckCircle, MessageCircle, ArrowDown, BookOpen, Calendar } from 'lucide-react';
import Link from 'next/link';
import AnimatedBackground from '../components/AnimatedBackground';
import VideoSection from '../components/VideoSection';
import PhotoGallery from '../components/PhotoGallery';
import { TELEGRAM } from '../config/env';

// Структурированные данные для главной страницы
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://metaflux.ru/#organization',
  name: 'MetaFlux',
  url: 'https://metaflux.ru',
  logo: 'https://metaflux.ru/icon.png',
  description: 'Премиум digital-агентство полного цикла. Создаём революционные веб-сайты, мобильные приложения и уникальный дизайн.',
  email: 'info@metaflux.ru',
  foundingDate: '2019',
  numberOfEmployees: '10-50',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'RU',
    addressLocality: 'Moscow'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Digital услуги',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Веб-разработка',
          description: 'Современные веб-приложения с передовыми технологиями'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'UX/UI Дизайн',
          description: 'Интуитивные интерфейсы, которые влюбляют пользователей'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Мобильные приложения',
          description: 'Нативные и кроссплатформенные приложения для iOS и Android'
        }
      }
    ]
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '150',
    bestRating: '5',
    worstRating: '1'
  }
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://metaflux.ru/#website',
  url: 'https://metaflux.ru',
  name: 'MetaFlux',
  description: 'Премиум digital-агентство. Веб-разработка, UX/UI дизайн, мобильные приложения.',
  publisher: {
    '@id': 'https://metaflux.ru/#organization'
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://metaflux.ru/search?q={search_term_string}'
    },
    'query-input': 'required name=search_term_string'
  }
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Главная',
      item: 'https://metaflux.ru'
    }
  ]
};

export default function Home() {
  return (
    <>
      {/* Структурированные данные */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 text-gray-900 relative">
        <AnimatedBackground />
        
        {/* Hero Section */}
        <section className="pt-16 sm:pt-20 min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6">
          <div className="relative z-10 text-center max-w-6xl mx-auto">
            {/* Brand Icon */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5, y: -30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
              className="flex justify-center mb-6 sm:mb-8"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center shadow-2xl p-3 sm:p-4">
                <Image 
                  src="/icon.png" 
                  alt="MetaFlux — Премиум Digital-агентство логотип" 
                  width={48} 
                  height={48} 
                  className="w-full h-full object-contain filter brightness-0 invert"
                  priority
                />
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-6 sm:mb-8 leading-tight px-2"
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
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4"
            >
              Отправляйтесь в путешествие по созданию вашего MVP с передовым UI дизайном.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
            >
              <motion.a 
                href={TELEGRAM}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 text-white rounded-full font-semibold text-base sm:text-lg hover:bg-gray-800 transition-all duration-300 shadow-xl inline-block text-center min-h-[48px] flex items-center justify-center"
              >
                Связаться с нами
              </motion.a>
              <motion.a
                href="/services"
                whileHover={{ scale: 1.05, borderColor: "#8b5cf6", color: "#8b5cf6" }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 text-center min-h-[48px] flex items-center justify-center"
              >
                Наши услуги
              </motion.a>
            </motion.div>
          </div>

          {/* Client Logos */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute bottom-10 sm:bottom-20 left-1/2 transform -translate-x-1/2 w-full max-w-6xl px-4 sm:px-6"
          >
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 opacity-40 grayscale">
              {['Веб-разработка', 'UI/UX дизайн', 'Мобильные приложения', 'Брендинг', 'Digital маркетинг', 'Консалтинг'].map((service, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="text-gray-500 font-medium text-xs sm:text-sm md:text-base whitespace-nowrap"
                >
                  {service}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Photo Gallery */}
        <PhotoGallery />

        {/* Features Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
                Почему выбирают
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {" "}нас
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Мы объединяем креативность, технологии и стратегию для создания выдающихся результатов
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
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
                  <div className="text-center p-4">
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${feature.color} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
                Как мы
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  {" "}работаем
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Пошаговый процесс создания вашего проекта
              </p>
            </motion.div>

            <div className="relative">
              {/* Process Line - hidden on mobile */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full hidden lg:block"></div>
              
              <div className="space-y-8 sm:space-y-12 lg:space-y-16">
                {[
                  {
                    step: "01",
                    title: "Исследование и анализ",
                    description: "Изучаем ваш бизнес, целевую аудиторию и конкурентов для создания эффективной стратегии",
                    color: "from-blue-500 to-cyan-500"
                  },
                  {
                    step: "02", 
                    title: "Планирование и дизайн",
                    description: "Создаем детальный план проекта и разрабатываем уникальный дизайн, отражающий ваш бренд",
                    color: "from-purple-500 to-pink-500"
                  },
                  {
                    step: "03",
                    title: "Разработка и тестирование",
                    description: "Воплощаем дизайн в код, проводим тщательное тестирование для обеспечения качества",
                    color: "from-green-500 to-emerald-500"
                  },
                  {
                    step: "04",
                    title: "Запуск и поддержка",
                    description: "Запускаем проект и обеспечиваем постоянную поддержку для достижения ваших целей",
                    color: "from-orange-500 to-red-500"
                  }
                ].map((process, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} max-w-6xl mx-auto`}
                  >
                    <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-8">
                      <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${process.color} rounded-xl sm:rounded-2xl text-white font-bold text-lg sm:text-2xl mb-4 sm:mb-6`}>
                        {process.step}
                      </div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">{process.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{process.description}</p>
                    </div>
                    <div className="w-full lg:w-1/2 flex justify-center p-4">
                      <motion.div
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        className={`w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br ${process.color} rounded-2xl sm:rounded-3xl opacity-20`}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-2">
                Цифры говорят
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {" "}за нас
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
                Результаты нашей работы в цифрах
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {[
                { number: "500+", label: "Завершенных проектов", icon: CheckCircle },
                { number: "150+", label: "Довольных клиентов", icon: Users },
                { number: "98%", label: "Успешных запусков", icon: TrendingUp },
                { number: "24/7", label: "Поддержка клиентов", icon: Clock }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center group p-4"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2"
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-gray-400 font-medium text-xs sm:text-sm lg:text-base">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
                Часто задаваемые
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  {" "}вопросы
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 px-4">
                Ответы на самые популярные вопросы о нашей работе
              </p>
            </motion.div>

            <div className="space-y-3 sm:space-y-4">
              {[
                {
                  question: "Сколько времени занимает разработка проекта?",
                  answer: "Время разработки зависит от сложности проекта. Простые сайты занимают 2-4 недели, сложные веб-приложения - от 2 до 6 месяцев. Мы всегда обсуждаем сроки на этапе планирования."
                },
                {
                  question: "Предоставляете ли вы поддержку после запуска?",
                  answer: "Да, мы предоставляем полную техническую поддержку и сопровождение проектов. Включает обновления, резервное копирование, мониторинг безопасности и консультации."
                },
                {
                  question: "Можете ли вы работать с нашим существующим дизайном?",
                  answer: "Конечно! Мы можем работать как с готовыми дизайнами, так и создавать новые с нуля. Адаптируем любой дизайн под современные стандарты и лучшие практики."
                },
                {
                  question: "Какие технологии вы используете?",
                  answer: "Мы работаем с современными технологиями: React, Next.js, Node.js, Python, TypeScript и многими другими. Выбираем технологии исходя из требований проекта."
                },
                {
                  question: "Сколько стоят ваши услуги?",
                  answer: "Стоимость зависит от объема и сложности проекта. Мы предоставляем детальную смету после анализа требований. Свяжитесь с нами для индивидуального расчета."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 overflow-hidden"
                >
                  <motion.button
                    whileHover={{ backgroundColor: '#f8fafc' }}
                    className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 text-left focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-inset"
                  >
                    <div className="flex justify-between items-start">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 pr-4 sm:pr-6 lg:pr-8">{faq.question}</h3>
                      <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 transform transition-transform duration-200 flex-shrink-0 mt-1" />
                    </div>
                    <div className="mt-3 sm:mt-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                      {faq.answer}
                    </div>
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 px-2">
                Готовы начать ваш
                <br className="hidden sm:block" />
                следующий проект?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-12 px-4">
                Свяжитесь с нами сегодня и давайте создадим что-то удивительное вместе
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <motion.a
                  href={TELEGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white text-purple-600 rounded-full font-semibold text-base sm:text-lg hover:shadow-xl transition-all duration-300 min-h-[48px]"
                >
                  Начать проект
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
