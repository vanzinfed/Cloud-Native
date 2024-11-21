import React from 'react';
import { motion } from 'framer-motion';
import videoSrc from './video.mp4'; // Импортируем видеофайл

export default function GetStarted() {
  return (
    <section id="get-started" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-16">
          Начните работать с Cloud Native уже сегодня
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="border-4 border-blue-500 rounded-xl p-8"
          >
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">Трансформируйте свой бизнес</h3>
            <p className="text-blue-700">
              Обеспечьте гибкость, масштабируемость и инновации, необходимые вашей организации, чтобы оставаться впереди.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border-4 border-purple-500 rounded-xl p-8"
          >
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">Сотрудничество с экспертами</h3>
            <p className="text-blue-700">
              Наша команда экспертов по облачным технологиям поможет вам пройти все этапы трансформации.
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-xl mb-8">
            <video controls className="w-full h-full rounded-xl">
              <source src={videoSrc} type="video/mp4" />
              Ваш браузер не поддерживает видео.
            </video>
          </div>
          <p className="text-blue-700 text-center">
            Узнайте, как облачные решения могут изменить ваш бизнес и стимулировать инновации, на примере "Mailon".
          </p>
        </div>
      </div>
    </section>
  );
}
