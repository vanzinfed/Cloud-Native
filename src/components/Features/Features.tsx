import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Scale, Shield, Rocket, GitBranch, Lock, DollarSign } from 'lucide-react';

const features = [
  {
    icon: Scale,
    title: 'Масштабируемость и устойчивость',
    description: 'Создавайте системы, которые автоматически масштабируются в зависимости от спроса и поддерживают высокую доступность.',
    href: '#architecture',
  },
  {
    icon: Rocket,
    title: 'Ускорение инноваций',
    description: 'Применяйте agile-методологии для ускорения циклов разработки и развертывания.',
    href: '#innovation',
  },
  {
    icon: GitBranch,
    title: 'Оптимизированный DevOps',
    description: 'Автоматизируйте развертывание и поддерживайте последовательную разработку.',
    href: '#devops',
  },
  {
    icon: Lock,
    title: 'Повышенная безопасность',
    description: 'Внедрение надежных мер безопасности и соблюдение стандартов.',
    href: '#security',
  },
  {
    icon: DollarSign,
    title: 'Оптимизация расходов',
    description: 'Оптимизируйте использование ресурсов и сократите эксплуатационные расходы благодаря облачным решениям.',
    href: '#optimization',
  },
  {
    icon: Shield,
    title: 'Непрерывность бизнеса',
    description: 'Обеспечьте доступность и устойчивость ваших приложений к сбоям.',
    href: '#get-started',
  },
];

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-blue-900 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Сила Cloud-Native архитектуры
          </h2>
          <p className="text-blue-200 text-lg">
            Узнайте, как облачные решения могут преобразить ваш бизнес
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.a
              href={feature.href}
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-blue-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-blue-700/50 transition-colors cursor-pointer"
            >
              <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-blue-200">
                {feature.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}