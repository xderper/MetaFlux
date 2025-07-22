'use client';
import { motion } from 'framer-motion';
import { Star, Users, Award, Target, Heart, Zap, TrendingUp, Globe, Code, Palette, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AnimatedBackground from '../../components/AnimatedBackground';
import { TELEGRAM } from '../../config/env';

export default function AboutPage() {
  const router = useRouter();
  
  const scrollToStats = () => {
    const statsSection = document.getElementById('stats-section');
    if (statsSection) {
      statsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { number: "100+", label: "Успешных проектов", icon: Award },
    { number: "50+", label: "Довольных клиентов", icon: Users },
    { number: "5", label: "Лет на рынке", icon: Star },
    { number: "24/7", label: "Поддержка", icon: Heart }
  ];

  const values = [
    {
      icon: Target,
      title: "Качество",
      description: "Мы стремимся к совершенству в каждом проекте, уделяя внимание мельчайшим деталям"
    },
    {
      icon: Heart,
      title: "Страсть",
      description: "Мы любим то, что делаем, и эта страсть отражается в каждом нашем решении"
    },
    {
      icon: Zap,
      title: "Инновации",
      description: "Мы всегда в курсе последних технологий и трендов в digital-сфере"
    },
    {
      icon: Users,
      title: "Команда",
      description: "Наша сила в команде профессионалов, объединённых общей целью"
    }
  ];

  const team = [
    {
      name: "Александр Иванов",
      role: "CEO & Co-founder",
      description: "10+ лет в digital, экс-Google",
      color: "from-purple-500 to-blue-500"
    },
    {
      name: "Мария Петрова",
      role: "Creative Director",
      description: "Ведущий UX/UI дизайнер",
      color: "from-pink-500 to-purple-500"
    },
    {
      name: "Дмитрий Сидоров",
      role: "Tech Lead",
      description: "Full-stack разработчик",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Елена Козлова",
      role: "Marketing Director",
      description: "Эксперт по digital-маркетингу",
      color: "from-green-500 to-teal-500"
    }
  ];

  const journey = [
    {
      year: "2019",
      title: "Основание",
      description: "Начали с небольшой команды и больших амбиций"
    },
    {
      year: "2020",
      title: "Первые клиенты",
      description: "Запустили первые успешные проекты"
    },
    {
      year: "2021",
      title: "Расширение",
      description: "Увеличили команду и спектр услуг"
    },
    {
      year: "2022",
      title: "Признание",
      description: "Получили награды за лучшие UI/UX проекты"
    },
    {
      year: "2023",
      title: "Международный рынок",
      description: "Начали работать с зарубежными клиентами"
    },
    {
      year: "2024",
      title: "Новые горизонты",
      description: "Запуск собственных продуктов и стартапов"
    }
  ];

  // Анимированный текст
  const titleWords = ["Мы", "создаём", "digital", "будущее"];
  
  // Декоративные элементы
  const FloatingElement = ({ delay = 0, duration = 20, className = "" }) => (
    <motion.div
      className={`absolute ${className}`}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 360],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut"
      }}
    />
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden pt-20">
        {/* Улучшенные декоративные элементы */}
        <FloatingElement 
          delay={0} 
          duration={15} 
          className="top-20 left-10 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-sm opacity-80"
        />
        <FloatingElement 
          delay={2} 
          duration={18} 
          className="top-32 right-20 w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-sm opacity-60"
        />
        <FloatingElement 
          delay={4} 
          duration={22} 
          className="top-40 left-1/4 w-5 h-5 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur-sm opacity-90"
        />
        <FloatingElement 
          delay={1} 
          duration={25} 
          className="top-24 right-1/3 w-7 h-7 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-sm opacity-50"
        />
        
        {/* Большие декоративные фигуры */}
        <motion.div
          className="absolute top-10 -left-20 w-60 h-60 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-20 -right-20 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Дополнительные светящиеся элементы */}
        <motion.div
          className="absolute bottom-10 left-1/4 w-40 h-40 bg-gradient-to-br from-indigo-500/15 to-purple-500/15 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            {/* Brand Icon */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5, y: -30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
              className="flex justify-center mb-8"
            >
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center shadow-2xl p-4">
                <img 
                  src="/icon.png" 
                  alt="MetaFlux Logo" 
                  className="w-full h-full object-contain filter brightness-0 invert"
                />
              </div>
            </motion.div>
            
            {/* Анимированный заголовок */}
            <div className="text-7xl md:text-9xl font-bold mb-12 leading-tight">
              <div className="mb-6">
                {titleWords.slice(0, 2).map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 100, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.3,
                      ease: "easeOut",
                      type: "spring",
                      stiffness: 100
                    }}
                    className="inline-block mr-8 text-white drop-shadow-2xl"
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
              <div className="relative">
                {titleWords.slice(2).map((word, index) => (
                  <motion.span
                    key={index + 2}
                    initial={{ opacity: 0, y: 100, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: (index + 2) * 0.3,
                      ease: "easeOut",
                      type: "spring",
                      stiffness: 100
                    }}
                    className="inline-block mr-8 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-2xl relative"
                  >
                    {word}
                    {index === 1 && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1.5, duration: 0.5 }}
                        className="absolute -top-6 -right-6"
                      >
                        <Sparkles className="w-12 h-12 text-yellow-400 drop-shadow-lg" />
                      </motion.div>
                    )}
                  </motion.span>
                ))}
              </div>
            </div>
            
            {/* Анимированное описание */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="relative mb-16"
            >
              <p className="text-2xl md:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed font-light">
                MetaFlux — это команда страстных профессионалов, которые превращают идеи в выдающиеся digital-решения
              </p>
              
              {/* Подчеркивание */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 2 }}
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full shadow-lg"
              />
            </motion.div>
            
            {/* Анимированные кнопки */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.2 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <motion.a
                href={TELEGRAM}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 25px 50px rgba(147, 51, 234, 0.5)",
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white rounded-full font-semibold text-xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 relative overflow-hidden group inline-block text-center"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Начать проект
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </motion.a>
              
              <motion.button
                onClick={scrollToStats}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 border-2 border-white/30 text-white rounded-full font-semibold text-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                Узнать больше
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Улучшенные статистики */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 2.7 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-8 bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 border border-white/20"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">{stat.number}</div>
                <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" className="py-24 px-6 bg-gradient-to-r from-white via-purple-50 to-pink-50 mt-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Цифры, которые
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {" "}говорят сами за себя
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Результаты нашей работы в цифрах
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="text-center group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-purple-100">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-5xl font-bold text-gray-900 mb-3">{stat.number}</div>
                  <div className="text-gray-600 font-medium text-lg">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white relative overflow-hidden">
        {/* Декоративные элементы */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-500/10 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl"></div>
        </motion.div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-6xl font-bold mb-8">
                Наша
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {" "}миссия
                </span>
              </h2>
              <p className="text-2xl text-gray-300 mb-8 leading-relaxed font-light">
                Мы верим, что каждый бизнес заслуживает выдающегося digital-присутствия. 
                Наша миссия — помочь компаниям любого размера достичь своих целей через 
                инновационные технологии и креативные решения.
              </p>
              <p className="text-xl text-gray-400 leading-relaxed mb-8">
                Мы не просто создаём продукты — мы строим мосты между идеями и их воплощением, 
                между брендами и их аудиторией, между настоящим и будущим.
              </p>
              
              {/* Список преимуществ */}
              <div className="space-y-4">
                {[
                  "Индивидуальный подход к каждому проекту",
                  "Использование передовых технологий",
                  "Полный цикл разработки",
                  "Постоянная поддержка и развитие"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-lg text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-10 shadow-2xl relative overflow-hidden">
                {/* Декоративные элементы внутри карты */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
                
                <div className="grid grid-cols-2 gap-8 relative z-10">
                  {[
                    { icon: Globe, title: "Global", desc: "Мировой уровень" },
                    { icon: Code, title: "Tech", desc: "Передовые технологии" },
                    { icon: Palette, title: "Design", desc: "Уникальный дизайн" },
                    { icon: TrendingUp, title: "Growth", desc: "Рост результатов" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="text-center p-4 bg-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                    >
                      <item.icon className="w-14 h-14 mx-auto mb-4 text-white" />
                      <div className="text-2xl font-bold text-white mb-2">{item.title}</div>
                      <div className="text-sm text-white/80">{item.desc}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl font-bold text-gray-900 mb-6">
              Наши
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {" "}ценности
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Принципы, которые направляют нашу работу и формируют нашу культуру
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-purple-100 h-full">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Journey Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">
              Наш
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}путь
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              История нашего роста и развития
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500"></div>
            
            <div className="space-y-16">
              {journey.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="text-4xl font-bold text-purple-400 mb-2">{item.year}</div>
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                  
                  <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                  
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900 text-white relative overflow-hidden">
        {/* Декоративные элементы */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <div className="absolute top-10 left-10 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"></div>
        </motion.div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl font-bold mb-8">
              Готовы начать ваш проект?
            </h2>
            <p className="text-2xl text-gray-300 mb-16 leading-relaxed font-light">
              Давайте обсудим, как мы можем помочь вашему бизнесу достичь новых высот
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a 
                href={TELEGRAM}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white text-purple-600 rounded-full font-semibold text-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-white/20 flex items-center gap-3 justify-center"
              >
                Связаться с нами
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.button 
                onClick={() => router.push('/portfolio')}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 border-2 border-white/30 text-white rounded-full font-semibold text-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                Посмотреть портфолио
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 