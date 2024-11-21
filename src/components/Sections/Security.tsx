import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, Server } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Безопасность',
    description: 'Надежные меры безопасности защищают ваши приложения и данные от угроз.',
  },
  {
    icon: CheckCircle,
    title: 'Соответствие требованиям',
    description: 'Соблюдайте отраслевые нормы и стандарты, чтобы ваши системы соответствовали требованиям.',
  },
  {
    icon: Server,
    title: 'Устойчивость',
    description: 'Защитите свой бизнес с помощью отказоустойчивых архитектур.',
  },
];

export default function Security() {
  return (
    <section id="security" className="py-20 bg-gradient-to-b from-blue-900 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Повышение уровня безопасности и соответствия нормативным требованиям
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-blue-800/50 backdrop-blur-sm rounded-xl p-8 text-center"
            >
              <feature.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-blue-200">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}