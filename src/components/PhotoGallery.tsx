'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const galleryItems = [
  {
    id: 1,
    title: "Energy Saver",
    category: "Веб-дизайн",
    color: "from-purple-500 to-pink-500",
    description: "NFT-стартап, основанный на взаимодействии цифрового искусства и сферы зеленой энергетики.",
    image: "/energy_saver.png"
  },
  {
    id: 2,
    title: "Camper Gear",
    category: "UI/UX",
    color: "from-blue-500 to-cyan-500",
    description: "Сайт для продажи туристического снаряжения",
    image: "/camping_gear.png"
  },
  {
    id: 3,
    title: "Unit Platform",
    category: "Веб-сайт",
    color: "from-green-500 to-teal-500",
    description: "Логистическая платформа для транспортировки грузов",
    image: "/UnitMove.png"
  },
  {
    id: 4,
    title: "Hybrid Chess",
    category: "Веб-приложение",
    color: "from-orange-500 to-red-500",
    description: "Турнирная система для шахматных соревнований",
    image: "/hybrid-chess.png"
  },
  {
    id: 5,
    title: "Aiaf",
    category: "Маркетинг",
    color: "from-indigo-500 to-purple-500",
    description: "Высококонверсионный лендинг для платформы по созданию ai агентов",
    image: "/aiaf.png"
  },
  {
    id: 6,
    title: "AI ассистент",
    category: "Мобильное приложение",
    color: "from-pink-500 to-rose-500",
    description: "Мобильное приложение с ai ассистентом",
    image: "/ai.png"
  }
];

export default function PhotoGallery() {
  const [filter, setFilter] = useState('Все');

  const categories = ['Все', 'Веб-дизайн', 'UI/UX', 'Брендинг', 'Маркетинг', 'Геймдизайн'];
  
  const filteredItems = filter === 'Все' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Наши
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}работы
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Каждый проект — это уникальная история успеха наших клиентов
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative overflow-hidden rounded-3xl shadow-2xl h-96">
                  {item.image ? (
                    // Real project image
                    <>
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-40`}></div>
                    </>
                  ) : (
                    // Gradient background for items without images
                    <>
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`}></div>
                      {/* Pattern overlay */}
                      <div className="absolute inset-0 opacity-30">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
                          <defs>
                            <pattern id={`gallery-grain-${item.id}`} width="100" height="100" patternUnits="userSpaceOnUse">
                              <circle cx="50" cy="50" r="1" fill="#ffffff" opacity="0.1"/>
                            </pattern>
                          </defs>
                          <rect width="100" height="100" fill={`url(#gallery-grain-${item.id})`}/>
                        </svg>
                      </div>
                    </>
                  )}
                  
                  {/* Content overlay - same for all items */}
                  <div className="absolute inset-0 p-8 text-white flex flex-col justify-between">
                    <div>
                      <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                        {item.category}
                      </span>
                      <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                    </div>
                    
                    <div className="relative z-10">
                      <p className="text-white/90 text-base leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
} 