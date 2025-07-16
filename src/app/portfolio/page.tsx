'use client';
import { motion } from 'framer-motion';
import { Star, ExternalLink, Github, Users, Award, Clock, Zap } from 'lucide-react';
import Link from 'next/link';
import AnimatedBackground from '../../components/AnimatedBackground';
import PhotoGallery from '../../components/PhotoGallery';

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
                  {project.image ? (
                    // Real project image
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-96 object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-40`}></div>
                      <div className="absolute inset-0 p-8 text-white flex flex-col justify-between">
                        <div>
                          <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                            {project.category}
                          </span>
                          <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4 text-center">
                          {Object.entries(project.metrics).map(([key, value], i) => (
                            <div key={i} className="p-3 bg-white/10 backdrop-blur-sm rounded-2xl">
                              <div className="text-2xl font-bold">{value}</div>
                              <div className="text-sm opacity-80 capitalize">{key}</div>
                            </div>
                          ))}
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
                </div>

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