'use client';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Users, Award, Clock, Zap } from 'lucide-react';
import Link from 'next/link';
import AnimatedBackground from '../../components/AnimatedBackground';
import PhotoGallery from '../../components/PhotoGallery';
import { TELEGRAM } from '../../config/env';

export default function PortfolioPage() {
  const featuredProjects = [
    {
      title: "Todo",
      description: "Эта лендинговая страница для управления задачами создана, чтобы помочь пользователям легко организовать работу.",
      category: "Веб-дизайн",
      year: "2024",
      technologies: ["React", "Next.js", "Three.js", "Tailwind CSS"],
      metrics: {
        visits: "+200%",
        engagement: "+85%",
        conversion: "+150%"
      },
      color: "from-purple-500 to-pink-500",
      image: "/todo.png",
      featured: true
    },
    {
      title: "Cosma",
      description: "Децентрализованная финансовая платформа, ориентированная на предоставление пользователям полного контроля над своими активами без участия традиционных институтов.",
      category: "Мобильное приложение",
      year: "2024",
      technologies: ["React Native", "AI/ML", "Firebase", "Stripe"],
      metrics: {
        downloads: "50K+",
        rating: "4.9★",
        retention: "78%"
      },
      image: "/cosma.png",
      color: "from-blue-500 to-cyan-500",
      featured: true
    },
    {
      title: "Hybrid Chess",
      description: "Турнирная система для шахмат",
      category: "Веб-приложение",
      year: "2023",
      technologies: ["Go", "Next.js", "PostgreSQL", "Docker"],
      metrics: {
        efficiency: "+300%",
        cost: "-40%",
        users: "2000+"
      },
              color: "from-green-500 to-teal-500",
        featured: true,
        image: "/hybrid-chess.png"
    }
  ];


  const stats = [
    { number: "100+", label: "Завершённых проектов" },
    { number: "50+", label: "Довольных клиентов" },
    { number: "98%", label: "Успешных запусков" },
    { number: "24/7", label: "Поддержка проектов" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 text-gray-900 relative">
      <AnimatedBackground />
    

      {/* Hero Section */}
      <section className="h-screen px-6 relative overflow-hidden flex items-center justify-center">
        {/* Advanced Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Animated gradient mesh background */}
          <div className="absolute inset-0 opacity-30">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <radialGradient id="mesh-gradient-1" cx="30%" cy="20%">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.4"/>
                  <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.1"/>
                </radialGradient>
                <radialGradient id="mesh-gradient-2" cx="70%" cy="80%">
                  <stop offset="0%" stopColor="#EC4899" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1"/>
                </radialGradient>
                <radialGradient id="mesh-gradient-3" cx="20%" cy="60%">
                  <stop offset="0%" stopColor="#10B981" stopOpacity="0.2"/>
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1"/>
                </radialGradient>
              </defs>
              <motion.circle 
                cx="30" cy="20" r="40"
                fill="url(#mesh-gradient-1)"
                animate={{ 
                  cx: [30, 35, 25, 30],
                  cy: [20, 25, 15, 20],
                  r: [40, 45, 35, 40]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.circle 
                cx="70" cy="80" r="35"
                fill="url(#mesh-gradient-2)"
                animate={{ 
                  cx: [70, 75, 65, 70],
                  cy: [80, 75, 85, 80],
                  r: [35, 40, 30, 35]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
              <motion.circle 
                cx="20" cy="60" r="30"
                fill="url(#mesh-gradient-3)"
                animate={{ 
                  cx: [20, 25, 15, 20],
                  cy: [60, 55, 65, 60],
                  r: [30, 35, 25, 30]
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              />
            </svg>
          </div>

          {/* Floating orbs with advanced animations */}
          <motion.div
            animate={{ 
              y: [0, -30, 0],
              rotate: [0, 360, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-24 h-24 bg-gradient-to-br from-purple-400 via-pink-400 to-purple-600 rounded-full opacity-20 blur-xl"
            style={{
              background: 'conic-gradient(from 0deg, #8B5CF6, #EC4899, #06B6D4, #8B5CF6)',
              filter: 'blur(20px)'
            }}
          />
          <motion.div
            animate={{ 
              y: [0, 25, 0],
              rotate: [0, -360, 0],
              scale: [1, 0.8, 1]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-1/3 right-1/4 w-36 h-36 rounded-full opacity-15"
            style={{
              background: 'conic-gradient(from 180deg, #06B6D4, #3B82F6, #8B5CF6, #06B6D4)',
              filter: 'blur(25px)'
            }}
          />
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              x: [0, 20, 0],
              rotate: [0, 180, 0]
            }}
            transition={{ 
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-1/3 left-1/3 w-28 h-28 rounded-full opacity-25"
            style={{
              background: 'conic-gradient(from 90deg, #10B981, #06B6D4, #8B5CF6, #10B981)',
              filter: 'blur(18px)'
            }}
          />

          {/* Particle system */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -Math.random() * 50 - 20, 0],
                x: [0, Math.sin(i) * 30, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
              className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                filter: 'blur(1px)'
              }}
            />
          ))}

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.02]">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="hero-grid" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hero-grid)" />
            </svg>
          </div>

          {/* Subtle lens flare effect */}
          <motion.div
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
              filter: 'blur(40px)'
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Decorative badge with icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: -30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.1,
                type: "spring",
                stiffness: 200 
              }}
              className="inline-block mb-8"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-lg"></div>
                <motion.div 
                  className="relative px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center gap-2"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center p-1">
                    <img 
                      src="/icon.png" 
                      alt="MetaFlux" 
                      className="w-full h-full object-contain filter brightness-0 invert"
                    />
                  </div>
                  <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Портфолио лучших проектов
                  </span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-12"
            >
              <motion.h1 
                className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-[0.9] tracking-tight"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div className="relative inline-block">
                  <motion.span
                    initial={{ opacity: 0, y: 30, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ 
                      duration: 1, 
                      delay: 0.3,
                      type: "spring",
                      stiffness: 100
                    }}
                    className="inline-block"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    Наши
                  </motion.span>
                  {/* Text shadow effect */}
                  <motion.span
                    className="absolute top-1 left-1 -z-10 text-purple-500/20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    Наши
                  </motion.span>
                </motion.div>
                <br />
                <motion.div className="relative inline-block">
                  <motion.span 
                    className="relative inline-block bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 30, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ 
                      duration: 1, 
                      delay: 0.5,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      backgroundPosition: "200% center",
                      transition: { duration: 0.8 }
                    }}
                    style={{ 
                      backgroundSize: "200% 100%",
                      transformStyle: "preserve-3d"
                    }}
                  >
                    шедевры
                    {/* Animated underline */}
                    <motion.div
                      className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1.2, delay: 1.5 }}
                    />
                    {/* Glowing dots */}
                    <motion.div
                      className="absolute -right-4 top-0 w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 2
                      }}
                    />
                  </motion.span>
                  {/* Text shadow effect */}
                  <motion.span
                    className="absolute top-2 left-2 -z-10 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-500/20 bg-clip-text text-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    style={{ backgroundSize: "200% 100%" }}
                  >
                    шедевры
                  </motion.span>
                </motion.div>
              </motion.h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mb-16"
            >
              <motion.p 
                className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Каждый проект — это{" "}
                <motion.span 
                  className="relative inline-block"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-semibold">
                    история успеха
                  </span>
                  <motion.span
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                  />
                </motion.span>
                {" "}наших клиентов. Откройте для себя digital-решения, которые изменили бизнесы
              </motion.p>

              {/* Floating call-to-action elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="mt-8 flex flex-wrap justify-center gap-4"
              >
                {['🎨 Дизайн', '💻 Разработка', '🚀 Запуск'].map((item, index) => (
                  <motion.div
                    key={index}
                    className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "rgba(255,255,255,0.1)"
                    }}
                  >
                    <span className="text-sm text-gray-600 font-medium">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

           

          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-300/10 to-pink-300/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-300/10 to-cyan-300/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center shadow-lg p-2">
                <img 
                  src="/icon.png" 
                  alt="MetaFlux" 
                  className="w-full h-full object-contain filter brightness-0 invert"
                />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Результаты нашей работы
            </h2>
            <p className="text-lg text-gray-600">Цифры, которые говорят сами за себя</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { type: "spring", stiffness: 300 }
                }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-300">
                  {/* Decorative gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  
                  {/* Floating icon background */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  
                  <motion.div 
                    className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-3"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3, type: "spring" }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute top-0 left-0 w-full h-full opacity-5" viewBox="0 0 100 100">
            <defs>
              <pattern id="project-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="5" cy="5" r="1" fill="currentColor"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#project-grid)"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block px-6 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full text-purple-700 font-medium text-sm mb-6"
            >
              ✨ Наши лучшие работы
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Избранные
              <motion.span 
                className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                whileHover={{ 
                  backgroundPosition: "200% center",
                  transition: { duration: 0.5 }
                }}
                style={{ backgroundSize: "200% 100%" }}
              >
                {" "}проекты
              </motion.span>
            </h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Проекты, которые получили наибольшее признание клиентов и экспертов
            </motion.p>
          </motion.div>

          <div className="space-y-32">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-reverse' : ''}`}
              >
                {/* Project Image */}
                <motion.div 
                  className="relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {project.image ? (
                    // Real project image
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                      {/* Glow effect */}
                      <div className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                      
                      <div className="relative bg-white rounded-3xl overflow-hidden">
                        <motion.img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                          whileHover={{ scale: 1.05 }}
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-40 group-hover:opacity-50 transition-opacity duration-300`}></div>
                        
                        {/* Overlay content */}
                        <div className="absolute inset-0 p-8 text-white flex flex-col justify-between">
                          <div>
                            <motion.span 
                              className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4 border border-white/20"
                              whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
                            >
                              {project.category}
                            </motion.span>
                            <motion.h3 
                              className="text-3xl font-bold mb-4"
                              initial={{ y: 20, opacity: 0.8 }}
                              whileInView={{ y: 0, opacity: 1 }}
                              transition={{ duration: 0.6 }}
                            >
                              {project.title}
                            </motion.h3>
                          </div>
                          
                          <motion.div 
                            className="grid grid-cols-3 gap-4 text-center"
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                          >
                            {Object.entries(project.metrics).map(([key, value], i) => (
                              <motion.div 
                                key={i} 
                                className="p-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300"
                                whileHover={{ scale: 1.05, y: -2 }}
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                              >
                                <div className="text-2xl font-bold">{value}</div>
                                <div className="text-sm opacity-80 capitalize">{key}</div>
                              </motion.div>
                            ))}
                          </motion.div>
                        </div>


                      </div>
                    </div>
                  ) : (
                    // Gradient placeholder for projects without images
                    <div className={`bg-gradient-to-br ${project.color} rounded-3xl p-8 text-white relative overflow-hidden`}>
                      <div className="absolute inset-0 opacity-20">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
                          <defs>
                            <pattern id={`project-pattern-${index}`} width="20" height="20" patternUnits="userSpaceOnUse">
                              <circle cx="10" cy="10" r="2" fill="#ffffff" opacity="0.1"/>
                            </pattern>
                          </defs>
                          <rect width="100" height="100" fill={`url(#project-pattern-${index})`}/>
                        </svg>
                      </div>
                      
                      <div className="relative z-10 h-80 flex flex-col justify-between">
                        <div>
                          <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
                            {project.category}
                          </span>
                          <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4 text-center">
                          {Object.entries(project.metrics).map(([key, value], i) => (
                            <div key={i}>
                              <div className="text-2xl font-bold">{value}</div>
                              <div className="text-sm opacity-80 capitalize">{key}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>

                {/* Project Details */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-sm text-purple-600 font-medium">ПРОЕКТ {project.year}</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-8">
                    <h4 className="text-sm font-medium text-gray-900 mb-3">ТЕХНОЛОГИИ</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <PhotoGallery />

    

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-white/10 to-pink-300/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0]
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-r from-cyan-300/20 to-white/10 rounded-full blur-3xl"
          />
          
          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.sin(i) * 20, 0],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3
              }}
              className={`absolute w-2 h-2 bg-white/40 rounded-full`}
              style={{
                top: `${20 + i * 10}%`,
                left: `${10 + i * 15}%`
              }}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 font-medium text-sm mb-8 border border-white/20"
            >
              🚀 Начните свой проект сегодня
            </motion.div>

            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Готовы создать свой{" "}
              <motion.span
                className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent"
                whileHover={{ 
                  backgroundPosition: "200% center",
                  transition: { duration: 0.5 }
                }}
                style={{ backgroundSize: "200% 100%" }}
              >
                шедевр?
              </motion.span>
            </motion.h2>
            
            <motion.p 
              className="text-xl md:text-2xl opacity-90 mb-12 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Давайте обсудим ваш проект и создадим что-то выдающееся вместе. 
              Превратим ваши идеи в digital-реальность!
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.a 
                href={TELEGRAM}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="group px-10 py-5 bg-white text-purple-600 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all duration-300 shadow-2xl inline-block text-center relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  💬 Обсудить проект
                </span>
                {/* Button glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
              
            </motion.div>

            {/* Statistics footer */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-16 pt-8 border-t border-white/20"
            >
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-2xl font-bold mb-1">24h</div>
                  <div className="text-sm opacity-80">Ответ на заявку</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">100%</div>
                  <div className="text-sm opacity-80">Качество работы</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">∞</div>
                  <div className="text-sm opacity-80">Ваши возможности</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 