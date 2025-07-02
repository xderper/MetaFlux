'use client';
import { motion } from 'framer-motion';
import { Star, ExternalLink, Github, Users, Award, Clock, Zap } from 'lucide-react';
import Link from 'next/link';
import AnimatedBackground from '../../components/AnimatedBackground';
import PhotoGallery from '../../components/PhotoGallery';

export default function PortfolioPage() {
  const featuredProjects = [
    {
      title: "Gallery Artisan",
      description: "Цифровая галерея современного искусства с уникальным интерактивным опытом",
      category: "Веб-дизайн",
      year: "2024",
      technologies: ["React", "Next.js", "Three.js", "Tailwind CSS"],
      metrics: {
        visits: "+200%",
        engagement: "+85%",
        conversion: "+150%"
      },
      color: "from-purple-500 to-pink-500",
      featured: true
    },
    {
      title: "SnapShot Pro",
      description: "Мобильное приложение для профессиональных фотографов с AI-обработкой",
      category: "Мобильное приложение",
      year: "2024",
      technologies: ["React Native", "AI/ML", "Firebase", "Stripe"],
      metrics: {
        downloads: "50K+",
        rating: "4.9★",
        retention: "78%"
      },
      color: "from-blue-500 to-cyan-500",
      featured: true
    },
    {
      title: "ProNature ERP",
      description: "Корпоративная система управления для экологических организаций",
      category: "Веб-приложение",
      year: "2023",
      technologies: ["Vue.js", "Node.js", "PostgreSQL", "Docker"],
      metrics: {
        efficiency: "+300%",
        cost: "-40%",
        users: "2000+"
      },
      color: "from-green-500 to-teal-500",
      featured: true
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Лучший UI/UX дизайн",
      description: "Webby Awards 2024",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Star,
      title: "Проект года",
      description: "Russian Design Awards 2023",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Выбор пользователей",
      description: "App Store Best of 2024",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Инновация года",
      description: "Digital Innovation Summit",
      color: "from-green-500 to-teal-500"
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
            <Link href="/services" className="hover:text-purple-600 transition-colors duration-300">Услуги</Link>
            <Link href="/portfolio" className="text-purple-600">Портфолио</Link>
            <Link href="/blog" className="hover:text-purple-600 transition-colors duration-300">Блог</Link>
          </nav>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors duration-300"
          >
            Начать проект
          </motion.button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
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
                шедевры
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Каждый проект — это история успеха наших клиентов. Откройте для себя digital-решения, которые изменили бизнесы
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Избранные
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {" "}проекты
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Проекты, которые получили наибольшее признание клиентов и экспертов
            </p>
          </motion.div>

          <div className="space-y-20">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-reverse' : ''}`}
              >
                {/* Project Image */}
                <div className="relative">
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
                </div>

                {/* Project Details */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-sm text-purple-600 font-medium">ПРОЕКТ {project.year}</span>
                    <div className="flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-purple-100 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 text-gray-600" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-purple-100 transition-colors"
                      >
                        <Github className="w-5 h-5 text-gray-600" />
                      </motion.button>
                    </div>
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
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
                  >
                    Подробнее о проекте
                    <ExternalLink className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <PhotoGallery />

      {/* Achievements Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">
              Наши
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}достижения
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Признание экспертов и клиентов по всему миру
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-gray-400">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-8">
              Готовы создать свой шедевр?
            </h2>
            <p className="text-xl opacity-90 mb-12 leading-relaxed">
              Давайте обсудим ваш проект и создадим что-то выдающееся вместе
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-xl"
              >
                Обсудить проект
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Скачать портфолио
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 