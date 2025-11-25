import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-soviet-dark">
      <header className="bg-soviet-gray border-b-2 border-soviet-red">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
              <img 
                src="https://cdn.poehali.dev/files/79dc0cfa-ee02-462b-a75b-bbe1d8b3292d.png" 
                alt="Флаг" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold text-soviet-gold">ЦК КПСС</h1>
                <p className="text-xs text-white/70">Официальный портал</p>
              </div>
            </Link>
            
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-white/80 hover:text-soviet-gold transition-colors">
                Главная
              </Link>
              <Link to="/structure" className="text-white/80 hover:text-soviet-gold transition-colors">
                Структура
              </Link>
              <Link to="/lubertsy" className="text-white/80 hover:text-soviet-gold transition-colors">
                Люберцы
              </Link>
              <Link to="/news" className="text-white/80 hover:text-soviet-gold transition-colors">
                Новости
              </Link>
              <Link to="/role-request" className="text-white/80 hover:text-soviet-gold transition-colors">
                Запрос роли
              </Link>
            </nav>

            <Link 
              to="/admin" 
              className="bg-soviet-red hover:bg-soviet-red/80 text-white px-4 py-2 rounded flex items-center gap-2 transition-colors"
            >
              <Icon name="Lock" size={16} />
              <span className="hidden sm:inline">Админ</span>
            </Link>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t-2 border-soviet-red bg-soviet-gray/50 py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/60 text-sm mb-2">
            © ЦК КПСС - Официальный сайт РП сервера Minecraft
          </p>
          <p className="text-white/40 text-xs">
            IP: 3PM3511.aternos.me:51574
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
