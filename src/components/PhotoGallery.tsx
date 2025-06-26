'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    title: "E-commerce платформа",
    category: "Веб-дизайн",
    color: "from-purple-500 to-pink-500",
    description: "Современная платформа для онлайн торговли"
  },
  {
    id: 2,
    title: "Мобильное приложение",
    category: "UI/UX",
    color: "from-blue-500 to-cyan-500",
    description: "Интуитивный интерфейс для iOS и Android"
  },
  {
    id: 3,
    title: "Корпоративный сайт",
    category: "Брендинг",
    color: "from-green-500 to-teal-500",
    description: "Представительский сайт компании"
  },
  {
    id: 4,
    title: "SaaS панель",
    category: "Веб-дизайн",
    color: "from-orange-500 to-red-500",
    description: "Административная панель для SaaS"
  },
  {
    id: 5,
    title: "Лендинг страница",
    category: "Маркетинг",
    color: "from-indigo-500 to-purple-500",
    description: "Высококонверсионный лендинг"
  },
  {
    id: 6,
    title: "Мобильная игра",
    category: "Геймдизайн",
    color: "from-pink-500 to-rose-500",
    description: "Интерфейс для мобильной игры"
  }
];

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState('Все');

  const categories = ['Все', 'Веб-дизайн', 'UI/UX', 'Брендинг', 'Маркетинг', 'Геймдизайн'];
  
  const filteredItems = filter === 'Все' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Наши
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {" "}работы
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(item.id)}
              >
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br shadow-xl">
                  <div className={`h-80 bg-gradient-to-br ${item.color} p-8 flex flex-col justify-between relative`}>
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
                    
                    <div className="relative z-10">
                      <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-white text-sm font-medium">
                        {item.category}
                      </span>
                    </div>
                    
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-white/90 text-sm">{item.description}</p>
                    </div>

                    {/* Hover overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-black/20 flex items-center justify-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        className="w-16 h-16 bg-white rounded-full flex items-center justify-center"
                      >
                        <ZoomIn className="w-8 h-8 text-gray-900" />
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                
                {(() => {
                  const item = galleryItems.find(i => i.id === selectedImage);
                  return item ? (
                    <div className={`h-96 bg-gradient-to-br ${item.color} p-12 flex items-center justify-center relative`}>
                      <div className="text-center">
                        <h3 className="text-4xl font-bold text-white mb-4">{item.title}</h3>
                        <p className="text-xl text-white/90 mb-6">{item.description}</p>
                        <span className="inline-block px-6 py-2 bg-white/20 rounded-full text-white font-medium">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  ) : null;
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
} 