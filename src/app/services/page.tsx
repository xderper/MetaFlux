'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Star, Zap, Code, Palette, Smartphone, Globe, TrendingUp, Users } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Дизайн",
      description: "Создаём интуитивные интерфейсы, которые влюбляют пользователей в ваш продукт",
      features: ["Пользовательские исследования", "Wireframing & Prototyping", "Visual Design", "Usability Testing"],
      price: "от 150,000 ₽",
      color: "from-purple-500 to-pink-500",
      popular: false
    },
    {
      icon: Code,
      title: "Веб-разработка",
      description: "Современные веб-приложения с передовыми технологиями и безупречной производительностью",
      features: ["React/Next.js", "Backend разработка", "База данных", "API интеграция"],
      price: "от 250,000 ₽",
      color: "from-blue-500 to-cyan-500",
      popular: true
    },
    {
      icon: Smartphone,
      title: "Мобильные приложения",
      description: "Нативные и кроссплатформенные приложения для iOS и Android",
      features: ["React Native", "Swift/Kotlin", "Push уведомления", "App Store оптимизация"],
      price: "от 300,000 ₽",
      color: "from-green-500 to-teal-500",
      popular: false
    },
    {
      icon: Globe,
      title: "Брендинг",
      description: "Комплексная разработка бренда: от логотипа до brand book",
      features: ["Логотип и фирменный стиль", "Brand book", "Маркетинговые материалы", "Brand strategy"],
      price: "от 100,000 ₽",
      color: "from-orange-500 to-red-500",
      popular: false
    },
    {
      icon: TrendingUp,
      title: "Digital маркетинг",
      description: "Продвижение вашего продукта и увеличение конверсий",
      features: ["SEO оптимизация", "Контекстная реклама", "Social Media", "Email маркетинг"],
      price: "от 80,000 ₽",
      color: "from-indigo-500 to-purple-500",
      popular: false
    },
    {
      icon: Users,
      title: "Консультации",
      description: "Экспертные консультации по digital стратегии и развитию продукта",
      features: ["Product Strategy", "Technical Audit", "UX Audit", "Growth Hacking"],
      price: "от 50,000 ₽",
      color: "from-yellow-500 to-orange-500",
      popular: false
    }
  ];

  const processes = [
    {
      step: "01",
      title: "Исследование",
      description: "Глубокий анализ вашего бизнеса, конкурентов и целевой аудитории"
    },
    {
      step: "02", 
      title: "Стратегия",
      description: "Разработка стратегии и создание детального плана проекта"
    },
    {
      step: "03",
      title: "Дизайн",
      description: "Создание wireframes, прототипов и финального дизайна"
    },
    {
      step: "04",
      title: "Разработка",
      description: "Программирование и интеграция всех компонентов проекта"
    },
    {
      step: "05",
      title: "Тестирование",
      description: "Комплексное тестирование функциональности и пользовательского опыта"
    },
    {
      step: "06",
      title: "Запуск",
      description: "Развертывание проекта и поддержка после запуска"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center shadow-lg">
              <span className="text-2xl font-bold text-white tracking-tight">M</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">MetaFlux</span>
          </Link>
          <nav className="hidden md:flex gap-8 text-base font-medium text-gray-600">
            <Link href="/" className="hover:text-purple-600 transition-colors duration-300">Главная</Link>
            <Link href="/about" className="hover:text-purple-600 transition-colors duration-300">О нас</Link>
            <Link href="/services" className="text-purple-600">Услуги</Link>
            <Link href="/portfolio" className="hover:text-purple-600 transition-colors duration-300">Портфолио</Link>
            <Link href="/blog" className="hover:text-purple-600 transition-colors duration-300">Блог</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              Наши
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                услуги
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Полный спектр digital-решений для трансформации вашего бизнеса и достижения выдающихся результатов
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="relative bg-white rounded-3xl p-8 border border-gray-200 hover:border-purple-300 transition-all duration-300 shadow-lg hover:shadow-2xl">
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4" />
                        Популярно
                      </div>
                    </div>
                  )}
                  
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-gray-900">{service.price}</div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
                    >
                      Заказать
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Наш
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}процесс
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Проверенная методология, которая гарантирует успех вашего проекта
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processes.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="relative bg-gray-800/50 rounded-3xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                  <div className="absolute -top-6 left-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {process.step}
                    </div>
                  </div>
                  
                  <div className="pt-6">
                    <h3 className="text-2xl font-bold text-white mb-4">{process.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{process.description}</p>
                  </div>

                  {/* Connecting line */}
                  {index < processes.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Почему
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {" "}мы
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Преимущества работы с нашей командой профессионалов
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "98%",
                title: "Довольных клиентов",
                description: "Высокая оценка качества наших услуг"
              },
              {
                number: "24/7",
                title: "Поддержка",
                description: "Всегда готовы помочь и ответить на вопросы"
              },
              {
                number: "2x",
                title: "Быстрее конкурентов",
                description: "Оптимизированные процессы разработки"
              },
              {
                number: "150+",
                title: "Проектов",
                description: "Успешно реализованных решений"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
                  {benefit.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
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
              Готовы начать
              <br />
              ваш проект?
            </h2>
            <p className="text-xl text-white/90 mb-12">
              Расскажите нам о вашей идее, и мы поможем воплотить её в жизнь
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
              >
                Обсудить проект
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Скачать прайс
              </motion.button>
            </div>
          </motion.div>
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
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Частые
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {" "}вопросы
              </span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "Сколько времени занимает разработка проекта?",
                answer: "Время разработки зависит от сложности проекта. Обычно лендинг занимает 2-3 недели, корпоративный сайт - 4-6 недель, а сложное веб-приложение может занять 2-3 месяца."
              },
              {
                question: "Предоставляете ли вы поддержку после запуска?",
                answer: "Да, мы предоставляем техническую поддержку и сопровождение проектов. Включает в себя исправление ошибок, обновления контента и консультации."
              },
              {
                question: "Можете ли вы работать с нашим дизайном?",
                answer: "Конечно! Мы можем работать как с готовыми дизайнами, так и создавать уникальные решения с нуля. Главное - качественный результат."
              },
              {
                question: "Какие технологии вы используете?",
                answer: "Мы работаем с современным стеком: React, Next.js, TypeScript, Node.js, PostgreSQL и другими передовыми технологиями, обеспечивающими высокую производительность."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 