import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const team = [
  {
    name: 'Участник 1',
    role: 'Разработчик',
    image: 'https://img.freepik.com/premium-vector/blue-circle-with-white-user-vector_941526-5764.jpg',
  },
  {
    name: 'Участник 2',
    role: 'UX/UI Дизайнер',
    image: 'https://img.freepik.com/premium-vector/blue-circle-with-white-user-vector_941526-5764.jpg',
  },
  {
    name: 'Участник 3',
    role: 'Контент-менеджер',
    image: 'https://img.freepik.com/premium-vector/blue-circle-with-white-user-vector_941526-5764.jpg',
  },
];

export default function Team() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="team" className="py-20 bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Наша команда</h2>
          <p className="text-blue-200 text-lg">
            Познакомьтесь с экспертами, стоящими за нашими облачными решениями
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-blue-800/50 backdrop-blur-sm rounded-xl p-6 text-center"
            >
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {member.name}
              </h3>
              <p className="text-blue-200 mb-4">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
