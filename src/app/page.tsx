'use client';
import Image from "next/image";
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, Users, Zap, Award, TrendingUp, Clock, CheckCircle, MessageCircle, ArrowDown, BookOpen, Calendar } from 'lucide-react';
import Link from 'next/link';
import AnimatedBackground from '../components/AnimatedBackground';
import VideoSection from '../components/VideoSection';
import PhotoGallery from '../components/PhotoGallery';
import { TELEGRAM } from '../config/env';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 text-gray-900 relative">
      <AnimatedBackground />
      
    

      {/* Hero Section */}
      <section className="pt-20 min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          {/* Brand Icon */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5, y: -30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
            className="flex justify-center mb-8"
          >
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center shadow-2xl p-4">
              <Image 
                src="/icon.png" 
                alt="MetaFlux Logo" 
                width={48} 
                height={48} 
                className="w-full h-full object-contain filter brightness-0 invert"
              />
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
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
            <motion.a 
              href={TELEGRAM}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gray-900 text-white rounded-full font-semibold text-lg hover:bg-gray-800 transition-all duration-300 shadow-xl inline-block text-center"
            >
              Связаться с нами
            </motion.a>
            <motion.a
              href="/services"
              whileHover={{ scale: 1.05, borderColor: "#8b5cf6", color: "#8b5cf6" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold text-lg transition-all duration-300 text-center"
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
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-full max-w-6xl px-6"
        >
          <div className="flex justify-center items-center gap-8 md:gap-12 opacity-40 grayscale">
            {['Веб-разработка', 'UI/UX дизайн', 'Мобильные приложения', 'Брендинг', 'Digital маркетинг', 'Консалтинг'].map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="text-gray-500 font-medium text-sm md:text-base whitespace-nowrap"
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


  

      

      

    

      {/* Process Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Как мы
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                {" "}работаем
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Пошаговый процесс создания вашего проекта
            </p>
          </motion.div>

          <div className="relative">
            {/* Process Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full hidden md:block"></div>
            
            <div className="space-y-16">
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
                  className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} max-w-6xl mx-auto`}
                >
                  <div className="md:w-1/2 p-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${process.color} rounded-2xl text-white font-bold text-2xl mb-6`}>
                      {process.step}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{process.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{process.description}</p>
                  </div>
                  <div className="md:w-1/2 flex justify-center">
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      className={`w-32 h-32 bg-gradient-to-br ${process.color} rounded-3xl opacity-20`}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

          {/* Statistics Section */}
          <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Цифры говорят
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {" "}за нас
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Результаты нашей работы в цифрах
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
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
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2"
                >
                  {stat.number}
                </motion.div>
                <p className="text-gray-400 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Часто задаваемые
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {" "}вопросы
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Ответы на самые популярные вопросы о нашей работе
            </p>
          </motion.div>

          <div className="space-y-4">
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
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
              >
                <motion.button
                  whileHover={{ backgroundColor: '#f8fafc' }}
                  className="w-full px-8 py-6 text-left focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-inset"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900 pr-8">{faq.question}</h3>
                    <ArrowDown className="w-5 h-5 text-gray-500 transform transition-transform duration-200" />
                  </div>
                  <div className="mt-4 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.button>
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
              <motion.a
                href={TELEGRAM}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
              >
                Начать проект
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
