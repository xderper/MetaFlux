'use client';
import { motion } from 'framer-motion';
import { Star, Users, Award, Target, Heart, Zap, TrendingUp, Globe, Code, Palette } from 'lucide-react';
import Link from 'next/link';
import AnimatedBackground from '../../components/AnimatedBackground';

export default function AboutPage() {
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
            <Link href="/about" className="text-purple-600">О нас</Link>
            <Link href="/services" className="hover:text-purple-600 transition-colors duration-300">Услуги</Link>
            <Link href="/portfolio" className="hover:text-purple-600 transition-colors duration-300">Портфолио</Link>
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
              Мы создаём
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                digital будущее
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              MetaFlux — это команда страстных профессионалов, которые превращают идеи в выдающиеся digital-решения
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

      {/* Mission Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-bold text-gray-900 mb-8">
                Наша
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {" "}миссия
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Мы верим, что каждый бизнес заслуживает выдающегося digital-присутствия. 
                Наша миссия — помочь компаниям любого размера достичь своих целей через 
                инновационные технологии и креативные решения.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Мы не просто создаём продукты — мы строим мосты между идеями и их воплощением, 
                между брендами и их аудиторией, между настоящим и будущим.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-3xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <Globe className="w-12 h-12 mx-auto mb-4" />
                    <div className="text-2xl font-bold">Global</div>
                    <div className="text-sm opacity-90">Мировой уровень</div>
                  </div>
                  <div className="text-center">
                    <Code className="w-12 h-12 mx-auto mb-4" />
                    <div className="text-2xl font-bold">Tech</div>
                    <div className="text-sm opacity-90">Передовые технологии</div>
                  </div>
                  <div className="text-center">
                    <Palette className="w-12 h-12 mx-auto mb-4" />
                    <div className="text-2xl font-bold">Design</div>
                    <div className="text-sm opacity-90">Уникальный дизайн</div>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="w-12 h-12 mx-auto mb-4" />
                    <div className="text-2xl font-bold">Growth</div>
                    <div className="text-sm opacity-90">Рост результатов</div>
                  </div>
                </div>
              </div>
            </motion.div>
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
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Познакомьтесь с
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {" "}командой
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Талантливые профессионалы, которые делают магию возможной
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className={`w-20 h-20 bg-gradient-to-br ${member.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl font-bold text-white">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
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
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 hidden lg:block"></div>
            
            <div className="space-y-16">
              {journey.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className="flex-1 lg:text-right" style={{ textAlign: index % 2 === 0 ? 'right' : 'left' }}>
                    <div className="text-4xl font-bold text-purple-400 mb-2">{item.year}</div>
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                  
                  <div className="w-4 h-4 bg-purple-500 rounded-full hidden lg:block"></div>
                  
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
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
              Готовы начать ваш проект?
            </h2>
            <p className="text-xl opacity-90 mb-12 leading-relaxed">
              Давайте обсудим, как мы можем помочь вашему бизнесу достичь новых высот
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-xl"
              >
                Забронировать звонок
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
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