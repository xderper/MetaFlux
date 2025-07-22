'use client';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';
import { useState } from 'react';

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 px-2">
            Смотрите как мы
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              создаём магию
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Погрузитесь в наш творческий процесс и увидьте, как рождаются уникальные digital-решения
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Main Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group order-2 lg:order-1"
          >
            <div className="relative bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-0.5 sm:p-1">
              <div className="bg-black rounded-2xl sm:rounded-3xl overflow-hidden aspect-video">
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center group-hover:bg-purple-400 transition-colors duration-300"
                  >
                    {isPlaying ? (
                      <Pause className="w-6 h-6 sm:w-8 sm:h-8 text-gray-900" />
                    ) : (
                      <Play className="w-6 h-6 sm:w-8 sm:h-8 text-gray-900 ml-0.5 sm:ml-1" />
                    )}
                  </motion.button>
                  
                  {/* Video placeholder with animated overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                    <div className="absolute inset-0 opacity-30">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
                        <defs>
                          <pattern id="video-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#ffffff" strokeWidth="0.5" opacity="0.1"/>
                          </pattern>
                        </defs>
                        <rect width="100" height="100" fill="url(#video-grid)"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-4 sm:mt-6"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Процесс создания UI/UX</h3>
              <p className="text-gray-400 text-sm sm:text-base">От идеи до реализации за 5 минут</p>
            </motion.div>
          </motion.div>

          {/* Video Gallery */}
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            {[
              { title: "Разработка брендинга", duration: "3:45" },
              { title: "Мобильная разработка", duration: "5:20" },
              { title: "Веб-дизайн процесс", duration: "4:15" }
            ].map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-800/50 rounded-xl sm:rounded-2xl hover:bg-gray-800 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <Play className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-semibold group-hover:text-purple-400 transition-colors text-sm sm:text-base truncate">
                    {video.title}
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm">{video.duration}</p>
                </div>
                <motion.div
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, backgroundColor: '#8b5cf6' }}
                >
                  <Play className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 