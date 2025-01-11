import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => (
  <footer className="border-t border-slate-700 bg-slate-900">
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div>
          <h3 className="mb-4 text-lg font-bold text-purple-500">GameHub</h3>
          <p className="text-gray-400">
            Лучшая игровая комната в городе с современным оборудованием и комфортной атмосферой.
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-bold text-purple-500">Контакты</h3>
          <p className="text-gray-400">Адрес: ул. Игровая, 42</p>
          <p className="text-gray-400">Телефон: +7 (999) 123-45-67</p>
          <p className="text-gray-400">Email: info@gamehub.ru</p>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-bold text-purple-500">Мы в соцсетях</h3>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-purple-500">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-500">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-500">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-slate-700 pt-8 text-center text-gray-400">
        © 2024 GameHub. Все права защищены.
      </div>
    </div>
  </footer>
);

export default Footer;
