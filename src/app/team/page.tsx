'use client';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, MapPin, Award, Code, Palette, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import AnimatedBackground from '../../components/AnimatedBackground';

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Александр Иванов",
      role: "CEO & Co-founder",
      bio: "Бывший Lead Designer в Google. 10+ лет опыта в создании продуктов мирового уровня.",
      location: "Москва",
      experience: "10+ лет",
      image: "AI",
      color: "from-purple-500 to-blue-500",
      achievements: ["Ex-Google", "Forbes 30 Under 30"],
      skills: ["Product Management", "Team Leadership", "Strategic Planning"]
    },
    {
      name: "Мария Петрова", 
      role: "Creative Director",
      bio: "Ведущий UX/UI дизайнер с международным опытом. Создала более 50 успешных продуктов.",
      location: "Санкт-Петербург",
      experience: "8+ лет",
      image: "MP",
      color: "from-pink-500 to-purple-500",
      achievements: ["Behance Featured", "Awwwards SOTD"],
      skills: ["UI/UX Design", "Design Systems", "Prototyping"]
    },
    {
      name: "Дмитрий Сидоров",
      role: "Tech Lead", 
      bio: "Full-stack разработчик и архитектор решений. Специализируется на React и Node.js.",
      location: "Екатеринбург",
      experience: "9+ лет",
      image: "DS",
      color: "from-blue-500 to-cyan-500",
      achievements: ["GitHub Stars 10K+", "Tech Speaker"],
      skills: ["React/Next.js", "Node.js", "AWS/GCP"]
    }
  ];

  const stats = [
    { number: "50+", label: "Лет общего опыта", icon: Award },
    { number: "6", label: "Экспертов в команде", icon: Code },
    { number: "15+", label: "Технологий в стеке", icon: Palette },
    { number: "200+", label: "Проектов завершено", icon: TrendingUp }
  ];

  const values = [
    {
      title: "Открытость",
      description: "Мы открыты к новым идеям, технологиям и подходам"
    },
    {
      title: "Качество",
      description: "Каждая строка кода и каждый пиксель имеют значение"
    },
    {
      title: "Рост",
      description: "Мы постоянно учимся и развиваемся как профессионалы"
    },
    {
      title: "Команда",
      description: "Сила в единстве — мы поддерживаем друг друга"
    }
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
            <Link href="/portfolio" className="hover:text-purple-600 transition-colors duration-300">Портфолио</Link>
            <Link href="/team" className="text-purple-600">Команда</Link>
            <Link href="/blog" className="hover:text-purple-600 transition-colors duration-300">Блог</Link>
          </nav>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors duration-300"
          >
            Присоединиться
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
              Наша
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                команда
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Талантливые профессионалы, которые создают digital-решения мирового уровня
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
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className={`w-20 h-20 bg-gradient-to-br ${member.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl font-bold text-white">{member.image}</span>
                  </div>
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-gray-600 mb-4">{member.experience} • {member.location}</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{member.bio}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Достижения</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.achievements.map((achievement, i) => (
                        <span key={i} className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Навыки</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                          {skill}
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

      {/* Values Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Наши
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {" "}ценности
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Принципы, которые объединяют нашу команду и направляют нашу работу
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
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
              Присоединяйтесь к нам!
            </h2>
            <p className="text-xl opacity-90 mb-12 leading-relaxed">
              Мы всегда в поиске талантливых профессионалов
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-xl"
            >
              Открытые позиции
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 