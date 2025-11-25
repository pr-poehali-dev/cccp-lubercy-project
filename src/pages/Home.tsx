import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Home = () => {
  return (
    <div className="min-h-screen bg-soviet-dark">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-soviet-red/20 to-transparent" />
        
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <div className="mb-8">
              <img 
                src="https://cdn.poehali.dev/files/79dc0cfa-ee02-462b-a75b-bbe1d8b3292d.png" 
                alt="Флаг ЦК КПСС" 
                className="w-48 h-48 mx-auto object-contain drop-shadow-2xl"
              />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-soviet-gold mb-4 tracking-wider">
              ЦК КПСС
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-2">
              Центральный Комитет Коммунистической Партии Советского Союза
            </p>
            <p className="text-lg text-soviet-gold/80 mb-8">
              Официальный портал РП сервера Minecraft
            </p>
            
            <div className="flex items-center justify-center gap-3 text-white/70 mb-8">
              <Icon name="Server" size={20} />
              <span className="font-mono">3PM3511.aternos.me:51574</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Link to="/structure" className="group">
              <div className="bg-soviet-gray border-2 border-soviet-red hover:border-soviet-gold transition-all duration-300 p-6 hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-soviet-red/20 p-3 rounded">
                    <Icon name="Shield" size={32} className="text-soviet-gold" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Структура власти</h3>
                </div>
                <p className="text-white/70">Руководство партии, правительство и армия</p>
              </div>
            </Link>

            <Link to="/lubertsy" className="group">
              <div className="bg-soviet-gray border-2 border-soviet-green hover:border-soviet-gold transition-all duration-300 p-6 hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-soviet-green/20 p-3 rounded">
                    <Icon name="Building2" size={32} className="text-soviet-gold" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Люберцы</h3>
                </div>
                <p className="text-white/70">Городской округ в стадии строительства</p>
              </div>
            </Link>

            <Link to="/metro" className="group">
              <div className="bg-soviet-gray border-2 border-soviet-blue hover:border-soviet-gold transition-all duration-300 p-6 hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-soviet-blue/20 p-3 rounded">
                    <Icon name="Train" size={32} className="text-soviet-gold" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Метрополитен</h3>
                </div>
                <p className="text-white/70">Правила и информация о метро</p>
              </div>
            </Link>

            <Link to="/decrees" className="group">
              <div className="bg-soviet-gray border-2 border-soviet-red hover:border-soviet-gold transition-all duration-300 p-6 hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-soviet-red/20 p-3 rounded">
                    <Icon name="ScrollText" size={32} className="text-soviet-gold" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Постановления</h3>
                </div>
                <p className="text-white/70">Приказы и указы руководства</p>
              </div>
            </Link>

            <Link to="/news" className="group">
              <div className="bg-soviet-gray border-2 border-soviet-red hover:border-soviet-gold transition-all duration-300 p-6 hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-soviet-red/20 p-3 rounded">
                    <Icon name="Newspaper" size={32} className="text-soviet-gold" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Новости</h3>
                </div>
                <p className="text-white/70">События государства</p>
              </div>
            </Link>

            <Link to="/anthem" className="group">
              <div className="bg-soviet-gray border-2 border-soviet-gold hover:border-soviet-gold transition-all duration-300 p-6 hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-soviet-gold/20 p-3 rounded">
                    <Icon name="Music" size={32} className="text-soviet-gold" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Гимн</h3>
                </div>
                <p className="text-white/70">Государственный гимн ЦК КПСС</p>
              </div>
            </Link>

            <Link to="/role-request" className="group">
              <div className="bg-soviet-gray border-2 border-soviet-green hover:border-soviet-gold transition-all duration-300 p-6 hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-soviet-green/20 p-3 rounded">
                    <Icon name="UserPlus" size={32} className="text-soviet-gold" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Запрос роли</h3>
                </div>
                <p className="text-white/70">Подать заявку на профессию</p>
              </div>
            </Link>

            <Link to="/admin" className="group">
              <div className="bg-soviet-gray border-2 border-soviet-gold hover:border-soviet-gold transition-all duration-300 p-6 hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-soviet-gold/20 p-3 rounded">
                    <Icon name="Lock" size={32} className="text-soviet-gold" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Панель администратора</h3>
                </div>
                <p className="text-white/70">Управление контентом</p>
              </div>
            </Link>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block bg-soviet-gray border-2 border-soviet-gold px-8 py-4">
              <p className="text-soviet-gold text-lg font-bold mb-2">ПРОЛЕТАРИИ ВСЕХ СТРАН, СОЕДИНЯЙТЕСЬ!</p>
              <p className="text-white/70 text-sm">IP сервера: 3PM3511.aternos.me:51574</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="border-t-2 border-soviet-red bg-soviet-gray/50 py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/60 text-sm">
            © ЦК КПСС - Официальный сайт РП сервера Minecraft
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
