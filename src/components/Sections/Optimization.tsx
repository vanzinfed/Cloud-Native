import React from 'react';
import { motion } from 'framer-motion';

const metrics = [
  {
    value: '30%',
    color: 'text-blue-500',
    title: 'Экономия средств',
    description: 'Сократите расходы на инфраструктуру и обслуживание благодаря облачным решениям.',
  },
  {
    value: '99.9%',
    color: 'text-blue-300',
    title: 'Время работы',
    description: 'Обеспечьте высокую доступность и надежность критически важных приложений.',
  },
  {
    value: 'Unlimited',
    color: 'text-pink-400',
    title: 'Масштабируемость',
    description: 'Динамическое масштабирование ресурсов для удовлетворения переменчивых потребностей без перераспределения ресурсов.',
  },
];

export default function Optimization() {
  return (
    <section id="optimization" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-16">
          Оптимизация затрат и гибкость
        </h2>
        
        <div className="bg-blue-50/80 backdrop-blur-sm rounded-xl p-12 max-w-2xl mx-auto">
          <div className="space-y-12">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className={`text-6xl font-bold ${metric.color} mb-4`}>
                  {metric.value}
                </div>
                <h3 className="text-2xl font-semibold text-blue-900 mb-2">{metric.title}</h3>
                <p className="text-blue-700 max-w-md">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}