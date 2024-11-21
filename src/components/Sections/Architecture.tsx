import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Architecture() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section id="architecture" className="relative py-20 overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900"
        style={{ y }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Масштабируемость и устойчивость
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">Масштабируемость</h3>
            <p className="text-blue-100">
            Динамически масштабируйте ресурсы в соответствии с меняющимися требованиями, гарантируя постоянную производительность ваших приложений.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">Устойчивость</h3>
            <p className="text-blue-100">
            Используйте контейнеризацию, микросервисы и распределенные системы для создания отказоустойчивых приложений, способных противостоять сбоям.        </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}