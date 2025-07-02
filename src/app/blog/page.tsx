'use client';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Eye, MessageCircle, Share2, Tag } from 'lucide-react';
import Link from 'next/link';
import AnimatedBackground from '../../components/AnimatedBackground';

export default function BlogPage() {
  const featuredPost = {
    title: "Будущее UI/UX дизайна: AI и машинное обучение",
    excerpt: "Как искусственный интеллект революционизирует процесс создания пользовательских интерфейсов и какие инструменты уже сегодня доступны дизайнерам.",
    author: "Мария Петрова",
    date: "15 ноября 2024",
    readTime: "8 мин",
    views: "2.3K",
    comments: 45,
    category: "UI/UX",
    image: "featured",
    color: "from-purple-500 to-pink-500"
  };

  const blogPosts = [
    {
      title: "React 19: Новые возможности для разработчиков",
      excerpt: "Обзор ключевых нововведений в React 19 и их влияние на разработку современных веб-приложений.",
      author: "Дмитрий Сидоров",
      date: "12 ноября 2024",
      readTime: "6 мин",
      views: "1.8K",
      comments: 32,
      category: "Разработка",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Создание эффективных дизайн-систем",
      excerpt: "Пошаговое руководство по созданию масштабируемых дизайн-систем для крупных продуктов.",
      author: "Мария Петрова",
      date: "8 ноября 2024",
      readTime: "10 мин",
      views: "3.1K",
      comments: 67,
      category: "Дизайн",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Growth Hacking: 10 проверенных стратегий",
      excerpt: "Эффективные методы роста для стартапов и малого бизнеса с примерами из реальной практики.",
      author: "Елена Козлова",
      date: "5 ноября 2024",
      readTime: "7 мин",
      views: "2.7K",
      comments: 89,
      category: "Маркетинг",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Микроанимации в веб-дизайне",
      excerpt: "Как небольшие анимации улучшают пользовательский опыт и делают интерфейсы более живыми.",
      author: "Игорь Волков",
      date: "2 ноября 2024",
      readTime: "5 мин",
      views: "1.5K",
      comments: 23,
      category: "UI/UX",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Современные подходы к тестированию в React",
      excerpt: "Обзор инструментов и методологий для эффективного тестирования React-приложений.",
      author: "Дмитрий Сидоров",
      date: "29 октября 2024",
      readTime: "9 мин",
      views: "2.1K",
      comments: 41,
      category: "Разработка",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Психология цвета в digital-дизайне",
      excerpt: "Как цвета влияют на восприятие пользователей и принятие решений в цифровых продуктах.",
      author: "Анна Соколова",
      date: "26 октября 2024",
      readTime: "6 мин",
      views: "1.9K",
      comments: 35,
      category: "Дизайн",
      color: "from-pink-500 to-rose-500"
    }
  ];

  const categories = ["Все", "UI/UX", "Разработка", "Дизайн", "Маркетинг"];

  const stats = [
    { number: "100+", label: "Статей опубликовано" },
    { number: "50K+", label: "Читателей в месяц" },
    { number: "1.2K", label: "Подписчиков" },
    { number: "95%", label: "Полезности контента" }
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
            <Link href="/team" className="hover:text-purple-600 transition-colors duration-300">Команда</Link>
            <Link href="/blog" className="text-purple-600">Блог</Link>
          </nav>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors duration-300"
          >
            Подписаться
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
              Наш
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                блог
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Экспертные материалы о дизайне, разработке и digital-трендах от нашей команды
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

      {/* Featured Post */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Главная
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {" "}статья
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className={`px-3 py-1 bg-gradient-to-r ${featuredPost.color} text-white rounded-full text-sm font-medium`}>
                    {featuredPost.category}
                  </span>
                  <span className="text-sm text-gray-500">ГЛАВНАЯ СТАТЬЯ</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{featuredPost.title}</h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">{featuredPost.excerpt}</p>
                
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold">МП</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{featuredPost.author}</div>
                      <div className="text-sm text-gray-500">{featuredPost.date}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{featuredPost.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span className="text-sm">{featuredPost.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm">{featuredPost.comments}</span>
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
                >
                  Читать статью
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Image Placeholder */}
              <div className={`bg-gradient-to-br ${featuredPost.color} rounded-3xl p-8 text-white h-80 flex items-center justify-center`}>
                <div className="text-center">
                  <div className="text-6xl font-bold mb-4">AI</div>
                  <div className="text-xl">Будущее дизайна</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full font-medium transition-all duration-300 bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-700"
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  {/* Image */}
                  <div className={`h-48 bg-gradient-to-br ${post.color} flex items-center justify-center text-white relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-20">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
                        <defs>
                          <pattern id={`blog-pattern-${index}`} width="20" height="20" patternUnits="userSpaceOnUse">
                            <circle cx="10" cy="10" r="1" fill="#ffffff" opacity="0.2"/>
                          </pattern>
                        </defs>
                        <rect width="100" height="100" fill={`url(#blog-pattern-${index})`}/>
                      </svg>
                    </div>
                    <div className="text-center relative z-10">
                      <Tag className="w-12 h-12 mx-auto mb-2" />
                      <div className="text-sm font-medium">{post.category}</div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`px-3 py-1 bg-gradient-to-r ${post.color} text-white rounded-full text-xs font-medium`}>
                        {post.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          <span>{post.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-3 h-3" />
                          <span>{post.comments}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900">{post.author}</span>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-purple-100 hover:text-purple-600 transition-colors"
                        >
                          <Share2 className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-8">
              Не пропустите новые статьи
            </h2>
            <p className="text-xl opacity-90 mb-12 leading-relaxed">
              Подпишитесь на наш блог и получайте свежие материалы прямо на почту
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-xl"
              >
                Подписаться
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 