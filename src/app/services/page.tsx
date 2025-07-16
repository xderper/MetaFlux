'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, Star, Zap, Code, Palette, Smartphone, Globe, TrendingUp, Users, Sparkles, Award, Clock, Shield, Eye, Heart, Gem, Rocket, Wand2 } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    {
      icon: Palette,
      title: "UI/UX Дизайн",
      description: "Создаём интуитивные интерфейсы, которые влюбляют пользователей в ваш продукт",
      features: ["Пользовательские исследования", "Wireframing & Prototyping", "Visual Design", "Usability Testing"],
      price: "от 25,000 ₽",
      color: "from-purple-500 to-pink-500",
      popular: false
    },
    {
      icon: Code,
      title: "Веб-разработка",
      description: "Современные веб-приложения с передовыми технологиями и безупречной производительностью",
      features: ["React/Next.js", "Backend разработка", "База данных", "API интеграция"],
      price: "от 50,000 ₽",
      color: "from-blue-500 to-cyan-500",
      popular: true
    },
    {
      icon: Smartphone,
      title: "Мобильные приложения",
      description: "Нативные и кроссплатформенные приложения для iOS и Android",
      features: ["React Native", "Swift/Kotlin", "Push уведомления", "App Store оптимизация", "Интеграция с устройством"],
      price: "от 70,000 ₽",
      color: "from-green-500 to-teal-500",
      popular: false
    },
    {
      icon: Globe,
      title: "Брендинг",
      description: "Комплексная разработка бренда: от логотипа до brand book",
      features: ["Логотип и фирменный стиль", "Brand book", "Маркетинговые материалы", "Brand strategy"],
      price: "от 15,000 ₽",
      color: "from-orange-500 to-red-500",
      popular: false
    },
    {
      icon: TrendingUp,
      title: "Digital маркетинг",
      description: "Продвижение вашего продукта и увеличение конверсий",
      features: ["SEO оптимизация", "Контекстная реклама", "Social Media", "Email маркетинг"],
      price: "от 40,000 ₽",
      color: "from-indigo-500 to-purple-500",
      popular: false
    },
    {
      icon: Users,
      title: "Консультации",
      description: "Экспертные консультации по digital стратегии и развитию продукта",
      features: ["Product Strategy", "Technical Audit", "UX Audit", "Growth Hacking"],
      price: "от 10,000 ₽",
      color: "from-yellow-500 to-orange-500",
      popular: false
    }
  ];

  const processes = [
    {
      step: "01",
      title: "Исследование",
      description: "Глубокий анализ вашего бизнеса, конкурентов и целевой аудитории",
      icon: "🔍"
    },
    {
      step: "02", 
      title: "Стратегия",
      description: "Разработка стратегии и создание детального плана проекта",
      icon: "🎯"
    },
    {
      step: "03",
      title: "Дизайн",
      description: "Создание wireframes, прототипов и финального дизайна",
      icon: "🎨"
    },
    {
      step: "04",
      title: "Разработка",
      description: "Программирование и интеграция всех компонентов проекта",
      icon: "💻"
    },
    {
      step: "05",
      title: "Тестирование",
      description: "Комплексное тестирование функциональности и пользовательского опыта",
      icon: "🧪"
    },
    {
      step: "06",
      title: "Запуск",
      description: "Развертывание проекта и поддержка после запуска",
      icon: "🚀"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Global Styles */}
      <style jsx global>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
          50% { opacity: 1; transform: scale(1) rotate(180deg); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(2.4); opacity: 0; }
        }
        @keyframes wiggle {
          0%, 7% { transform: rotateZ(0); }
          15% { transform: rotateZ(-15deg); }
          20% { transform: rotateZ(10deg); }
          25% { transform: rotateZ(-10deg); }
          30% { transform: rotateZ(6deg); }
          35% { transform: rotateZ(-4deg); }
          40%, 100% { transform: rotateZ(0); }
        }
        @keyframes rainbow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-blob { animation: blob 7s infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-sparkle { animation: sparkle 3s infinite; }
        .animate-pulse-ring { animation: pulse-ring 2s infinite; }
        .animate-wiggle { animation: wiggle 2s infinite; }
        
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animation-delay-6000 { animation-delay: 6s; }
        .float-delay-1 { animation-delay: 1s; }
        .float-delay-2 { animation-delay: 2s; }
        .float-delay-3 { animation-delay: 3s; }
        .sparkle-delay-1 { animation-delay: 0.5s; }
        .sparkle-delay-2 { animation-delay: 1s; }
        .sparkle-delay-3 { animation-delay: 1.5s; }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        }
        .neon-glow {
          box-shadow: 0 0 20px rgba(147, 51, 234, 0.5), 0 0 40px rgba(147, 51, 234, 0.3), 0 0 60px rgba(147, 51, 234, 0.2);
        }
        .holographic {
          background: linear-gradient(45deg, #ff006e, #8338ec, #3a86ff, #06ffa5, #ffbe0b, #fb5607);
          background-size: 400% 400%;
          animation: rainbow 3s ease infinite;
        }
        .text-shimmer {
          background: linear-gradient(45deg, #ffa500, #ff6347, #ff1493, #9370db, #00ced1, #32cd32, #ffd700);
          background-size: 800% 800%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: rainbow 4s ease infinite;
        }
        .cursor-glow {
          position: fixed;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, rgba(147, 51, 234, 0) 70%);
          pointer-events: none;
          z-index: 9999;
          transition: all 0.3s ease;
        }
      `}</style>

      {/* Custom cursor effect */}
      <div 
        className="cursor-glow"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
          transform: `scale(${isHovering ? 2 : 1})`,
        }}
      />

      {/* Enhanced Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Holographic blobs */}
        <div className="absolute top-20 left-10 w-96 h-96 holographic rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-80 h-80 holographic rounded-full mix-blend-multiply filter blur-2xl opacity-25 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 holographic rounded-full mix-blend-multiply filter blur-2xl opacity-35 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-40 right-20 w-88 h-88 holographic rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-6000"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 border-2 border-purple-400 rotate-45 animate-float opacity-20"></div>
        <div className="absolute top-1/3 right-1/3 w-12 h-12 border-2 border-cyan-400 rounded-full animate-float float-delay-1 opacity-25"></div>
        <div className="absolute bottom-1/4 left-1/3 w-14 h-14 border-2 border-pink-400 rotate-12 animate-float float-delay-2 opacity-20"></div>
        <div className="absolute bottom-1/3 right-1/4 w-10 h-10 border-2 border-yellow-400 rounded-full animate-float float-delay-3 opacity-30"></div>
        
        {/* Sparkle effects */}
        <div className="absolute top-32 left-1/2 text-purple-400 animate-sparkle">✨</div>
        <div className="absolute top-64 right-1/3 text-cyan-400 animate-sparkle sparkle-delay-1">💎</div>
        <div className="absolute bottom-32 left-1/4 text-pink-400 animate-sparkle sparkle-delay-2">⭐</div>
        <div className="absolute bottom-64 right-1/2 text-yellow-400 animate-sparkle sparkle-delay-3">🌟</div>
        
        {/* Pulse rings */}
        <div className="absolute top-1/2 left-1/2 w-32 h-32 border border-purple-400 rounded-full animate-pulse-ring opacity-20"></div>
        <div className="absolute top-1/3 left-1/3 w-24 h-24 border border-cyan-400 rounded-full animate-pulse-ring opacity-15" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 right-1/3 w-28 h-28 border border-pink-400 rounded-full animate-pulse-ring opacity-25" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-purple-900/50 to-slate-900/90"></div>
        
        {/* 3D floating elements */}
        <div className="absolute top-20 left-20 w-32 h-32 glass-effect rounded-full flex items-center justify-center animate-float">
          <Gem className="w-16 h-16 text-purple-400 animate-sparkle" />
        </div>
        <div className="absolute top-40 right-20 w-24 h-24 glass-effect rounded-lg flex items-center justify-center animate-float float-delay-1">
          <Rocket className="w-12 h-12 text-cyan-400 animate-wiggle" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div 
              className="inline-flex items-center gap-3 glass-effect px-6 py-3 rounded-full font-semibold text-lg mb-8 neon-glow"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <Sparkles className="w-6 h-6 text-purple-400 animate-sparkle" />
              <span className="text-shimmer">Premium Digital Solutions</span>
              <Zap className="w-6 h-6 text-cyan-400 animate-wiggle" />
            </motion.div>
            
            <motion.h1 
              className="text-6xl md:text-9xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <span className="text-white">Наши</span>
              <br />
              <span className="text-shimmer relative">
                услуги
                <motion.div 
                  className="absolute -inset-4 holographic rounded-2xl blur-2xl opacity-30"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Полный спектр digital-решений для трансформации вашего бизнеса и достижения выдающихся результатов
            </motion.p>
            
            {/* Call to action buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 glass-effect rounded-full font-semibold text-lg neon-glow overflow-hidden"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <span className="relative z-10 text-white flex items-center gap-3">
                  <Eye className="w-6 h-6 animate-wiggle" />
                  Посмотреть услуги
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 holographic opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 border-2 border-purple-400 rounded-full font-semibold text-lg text-purple-400 hover:text-white transition-colors overflow-hidden"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Heart className="w-6 h-6 animate-sparkle" />
                  Связаться с нами
                </span>
                <div className="absolute inset-0 holographic opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Наши</span>
              <br />
              <span className="text-shimmer">решения</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Превосходство в каждой детали, инновации в каждом проекте
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -15, rotateY: 5, rotateX: 5 }}
                className="group relative"
                style={{ transformStyle: 'preserve-3d' }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="relative glass-effect rounded-3xl p-8 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-500 neon-glow overflow-hidden">
                  {/* Holographic gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Enhanced shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  
                  {service.popular && (
                    <motion.div 
                      className="absolute -top-2 left-1/2 transform -translate-x-1/2"
                      initial={{ scale: 0, rotate: -12 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                    >
                      <div className="holographic text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg neon-glow">
                        <Star className="w-4 h-4 animate-sparkle" />
                        Популярно
                      </div>
                    </motion.div>
                  )}
                  
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg relative`}>
                    <service.icon className="w-10 h-10 text-white" />
                    <div className="absolute inset-0 holographic opacity-0 group-hover:opacity-20 rounded-3xl transition-opacity duration-500"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i }}
                      >
                        <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center relative">
                          <Check className="w-4 h-4 text-white" />
                          <div className="absolute inset-0 bg-green-400 rounded-full animate-pulse-ring opacity-30"></div>
                        </div>
                        <span className="text-gray-200">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-bold text-shimmer">{service.price}</div>
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative group/btn px-6 py-3 glass-effect rounded-full font-medium text-white border border-purple-400/50 hover:border-purple-400 transition-all duration-300 overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Заказать
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                      <div className="absolute inset-0 holographic opacity-0 group-hover/btn:opacity-20 transition-opacity"></div>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900 via-purple-900/20 to-black text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Наш
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
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
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group"
              >
                <div className="relative glass-effect rounded-3xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-500 overflow-hidden h-56 flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="absolute top-2 left-8 z-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {process.step}
                    </div>
                  </div>
                  
                  <div className="pt-8 relative z-10 flex-grow flex flex-col">
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300 mb-4">{process.title}</h3>
                    <div className="flex items-start gap-4">
                      <span className="text-3xl animate-float">{process.icon}</span>
                      <p className="text-gray-400 leading-relaxed flex-grow">{process.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50 relative">
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
                description: "Высокая оценка качества наших услуг",
                icon: Award
              },
              {
                number: "24/7",
                title: "Поддержка",
                description: "Всегда готовы помочь и ответить на вопросы",
                icon: Shield
              },
              {
                number: "2x",
                title: "Быстрее конкурентов",
                description: "Оптимизированные процессы разработки",
                icon: Zap
              },
              {
                number: "150+",
                title: "Проектов",
                description: "Успешно реализованных решений",
                icon: TrendingUp
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="text-center group"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-purple-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
                    {benefit.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Готовы начать
              <br />
              ваш проект?
              <span className="text-4xl animate-bounce ml-4">🚀</span>
            </h2>
            <p className="text-xl text-white/90 mb-12">
              Расскажите нам о вашей идее, и мы поможем воплотить её в жизнь
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
              >
                <span className="relative z-10">Обсудить проект</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gray-50 relative">
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
                answer: "Время разработки зависит от сложности проекта. Обычно лендинг занимает 2-3 недели, корпоративный сайт - 4-6 недель, а сложное веб-приложение может занять 2-3 месяца.",
                icon: Clock
              },
              {
                question: "Предоставляете ли вы поддержку после запуска?",
                answer: "Да, мы предоставляем техническую поддержку и сопровождение проектов. Включает в себя исправление ошибок, обновления контента и консультации.",
                icon: Shield
              },
              {
                question: "Можете ли вы работать с нашим дизайном?",
                answer: "Конечно! Мы можем работать как с готовыми дизайнами, так и создавать уникальные решения с нуля. Главное - качественный результат.",
                icon: Palette
              },
              {
                question: "Какие технологии вы используете?",
                answer: "Мы работаем с современным стеком: React, Next.js, TypeScript, Node.js, PostgreSQL и другими передовыми технологиями, обеспечивающими высокую производительность.",
                icon: Code
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-purple-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <faq.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 