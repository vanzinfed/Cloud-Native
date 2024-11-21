import React from 'react';
import { motion } from 'framer-motion';

export default function DevOps() {
  return (
    <section id="devops" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-16">
          Оптимизация развертывания благодаря DevOps
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="border-4 border-blue-500 rounded-xl p-8"
          >
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">Автоматизация</h3>
            <p className="text-blue-700">
              Устраните ручные процессы и сократите количество человеческих ошибок благодаря автоматизированным конвейерам развертывания.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border-4 border-purple-500 rounded-xl p-8"
          >
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">Сотрудничество</h3>
            <p className="text-blue-700">
              Устраняйте барьеры между командами разработчиков и операторов, способствуя совместному управлению всем жизненным циклом программного обеспечения.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-4 border-pink-500 rounded-xl p-8 max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">Непрерывная доставка</h3>
          <p className="text-blue-700">
            Постоянно отправляйте пользователям новые функции и обновления, поддерживая приложение в актуальном состоянии.
          </p>
        </motion.div>
      </div>
    </section>
  );
}