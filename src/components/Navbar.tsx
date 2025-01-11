import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Gamepad2, MonitorPlay, Clock, Menu } from 'lucide-react';

const Navbar = () => (
  <nav className="border-b border-slate-700 bg-slate-900/75 backdrop-blur-sm">
    <div className="container mx-auto flex items-center justify-between px-4 py-4">
      <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-purple-500">
        <Gamepad2 className="h-8 w-8" />
        GameHub
      </Link>

      <div className="hidden items-center gap-6 md:flex">
        <Link to="/" className="flex items-center gap-2 text-gray-300 hover:text-purple-400">
          <MonitorPlay className="h-5 w-5" />
          Главная
        </Link>
        <Link
          to="/equipment"
          className="flex items-center gap-2 text-gray-300 hover:text-purple-400"
        >
          <Gamepad2 className="h-5 w-5" />
          Оборудование
        </Link>
        <Link to="/prices" className="flex items-center gap-2 text-gray-300 hover:text-purple-400">
          <Clock className="h-5 w-5" />
          Цены
        </Link>
        <Link to="/booking">
          <Button variant="secondary" className="bg-purple-600 text-white hover:bg-purple-700">
            Забронировать
          </Button>
        </Link>
      </div>

      <Button variant="ghost" className="md:hidden">
        <Menu className="h-6 w-6" />
      </Button>
    </div>
  </nav>
);

export default Navbar;
