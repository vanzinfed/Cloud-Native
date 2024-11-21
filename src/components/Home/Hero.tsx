import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Server, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900" />
      
      {/* Parallax */}
      <div className="absolute inset-0 overflow-hidden">
        {[Cloud, Server, Zap].map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute text-blue-200/20"
            initial={{ y: 0 }}
            animate={{
              y: [0, -20, 0],
              transition: {
                duration: 3,
                repeat: Infinity,
                delay: index * 0.5,
              },
            }}
            style={{
              left: `${20 + index * 30}%`,
              top: `${30 + index * 20}%`,
            }}
          >
            <Icon size={100} />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Cloud Native
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 font-light mb-8">
            Трансформация будущего программного обеспечения
          </p>
          <a
            href="#features"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Изучить особенности
          </a>
        </motion.div>
      </div>
    </section>
  );
}