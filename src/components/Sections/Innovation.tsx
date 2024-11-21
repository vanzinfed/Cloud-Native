import React from 'react';
import backgroundImage from './bg.jpg';

export default function Innovation() {
  return (
    <section
      id="innovation"
      className="py-20 relative overflow-hidden bg-blue-950"
    >
      {/* Параллакс-фон */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          mixBlendMode: 'overlay',
        }}
      ></div>

      {/* Контент */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Ускорьте инновации с помощью Agile
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-8">
          <Card
            number="1"
            title="Быстрые итерации"
            description="Быстро предоставляйте новые функции и обновления благодаря непрерывной интеграции и развертыванию."
          />
          <Card
            number="2"
            title="Расширение сотрудничества"
            description="Способствуйте развитию культуры межфункционального сотрудничества и общей ответственности за успех."
          />
        </div>
        <div className="relative max-w-2xl mx-auto">
          <Card
            number="3"
            title="Адаптация"
            description="Оперативно и гибко реагируйте на изменения рыночных условий и потребностей клиентов."
          />
        </div>
      </div>
    </section>
  );
}

function Card({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="relative">
      <div className="absolute -left-4 -top-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold text-white">
        {number}
      </div>
      <div className="bg-blue-900/50 rounded-xl p-8 ml-4">
        <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
        <p className="text-blue-200">{description}</p>
      </div>
    </div>
  );
}
