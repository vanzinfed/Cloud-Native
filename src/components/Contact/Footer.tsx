import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-blue-950 text-blue-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">О нас</h3>
            <p className="text-blue-300">
              Лидер в области облачных нативных решений, помогающий компаниям трансформироваться и масштабироваться в цифровую эпоху.
            </p>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <span>contact@madi.ru</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                <span>+7 (123) 456-78-90</span>
              </li>
              <li className="flex items-center">
                <MapPin size={18} className="mr-2" />
                <span>Leningradsky Ave, 64, Moscow</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-white transition-colors">Главная</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Особенности</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">Команда</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-blue-800 text-center">
          <p>&copy; {new Date().getFullYear()} CloudNative. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}