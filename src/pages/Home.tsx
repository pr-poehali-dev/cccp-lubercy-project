import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <header className="bg-[#1a1a1a] border-b-4 border-soviet-red">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-soviet-gold rounded-full flex items-center justify-center">
              <img 
                src="https://cdn.poehali.dev/files/79dc0cfa-ee02-462b-a75b-bbe1d8b3292d.png" 
                alt="Герб" 
                className="w-10 h-10 object-contain"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white uppercase tracking-wide">ЦК КПСС</h1>
              <p className="text-white/70 text-sm uppercase">Центральный Комитет Коммунистической Партии Советского Союза</p>
            </div>
          </div>
        </div>
      </header>

      <nav className="bg-soviet-red">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-8 py-3">
            <Link to="/" className="text-white hover:text-soviet-gold transition-colors font-medium">
              Главная
            </Link>
            <Link to="/structure" className="text-white hover:text-soviet-gold transition-colors font-medium">
              Руководство
            </Link>
            <Link to="/news" className="text-white hover:text-soviet-gold transition-colors font-medium">
              Новости
            </Link>
            <Link to="/lubertsy" className="text-white hover:text-soviet-gold transition-colors font-medium">
              Люберцы
            </Link>
            <Link to="/metro" className="text-white hover:text-soviet-gold transition-colors font-medium">
              Метрополитен
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="w-32 h-32 bg-soviet-red rounded-full flex items-center justify-center mx-auto mb-6 relative">
            <img 
              src="https://cdn.poehali.dev/files/79dc0cfa-ee02-462b-a75b-bbe1d8b3292d.png" 
              alt="Флаг" 
              className="w-20 h-20 object-contain"
            />
            <div className="absolute -top-2 -right-2 w-12 h-12 bg-soviet-gold rounded-full flex items-center justify-center">
              <Icon name="Star" size={24} className="text-soviet-red fill-soviet-red" />
            </div>
          </div>
          <h1 className="text-6xl font-bold text-white mb-4 uppercase tracking-wide">ОФИЦИАЛЬНЫЙ ПОРТАЛ</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Добро пожаловать на официальный информационный портал Центрального Комитета Коммунистической Партии Советского Союза
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          <Link to="/structure" className="group">
            <div className="bg-[#2a2a2a] border-2 border-white/20 hover:border-soviet-red transition-all p-8">
              <div className="flex items-center gap-4 mb-4">
                <Icon name="Users" size={32} className="text-soviet-red" />
                <h3 className="text-2xl font-bold text-white uppercase">Руководство</h3>
              </div>
              <p className="text-white/70">Структура власти и должностные лица партии</p>
            </div>
          </Link>

          <Link to="/news" className="group">
            <div className="bg-[#2a2a2a] border-2 border-white/20 hover:border-soviet-red transition-all p-8">
              <div className="flex items-center gap-4 mb-4">
                <Icon name="Newspaper" size={32} className="text-soviet-red" />
                <h3 className="text-2xl font-bold text-white uppercase">Новости</h3>
              </div>
              <p className="text-white/70">Последние постановления и официальные события</p>
            </div>
          </Link>

          <Link to="/lubertsy" className="group">
            <div className="bg-[#2a2a2a] border-2 border-white/20 hover:border-soviet-red transition-all p-8">
              <div className="flex items-center gap-4 mb-4">
                <Icon name="Building2" size={32} className="text-soviet-red" />
                <h3 className="text-2xl font-bold text-white uppercase">Люберцы</h3>
              </div>
              <p className="text-white/70">Городской округ в стадии строительства</p>
            </div>
          </Link>

          <Link to="/metro" className="group">
            <div className="bg-[#2a2a2a] border-2 border-white/20 hover:border-soviet-red transition-all p-8">
              <div className="flex items-center gap-4 mb-4">
                <Icon name="Train" size={32} className="text-soviet-red" />
                <h3 className="text-2xl font-bold text-white uppercase">Метрополитен</h3>
              </div>
              <p className="text-white/70">Правила и информация о метро</p>
            </div>
          </Link>
        </div>

        <div className="bg-[#3a2618] border-2 border-soviet-gold p-8 max-w-5xl mx-auto mb-12">
          <div className="flex items-center gap-4 mb-4">
            <Icon name="Server" size={32} className="text-soviet-gold" />
            <h3 className="text-2xl font-bold text-white uppercase">IP Сервера</h3>
          </div>
          <div className="bg-[#2a2010] p-6 rounded">
            <p className="text-soviet-gold font-mono text-2xl text-center">3PM3511.aternos.me:51574</p>
            <p className="text-white/60 text-sm text-center mt-2">Официальный игровой сервер ЦК КПСС</p>
          </div>
        </div>

        <div className="bg-[#2a1a1a] border-l-4 border-soviet-red p-8 max-w-5xl mx-auto">
          <div className="flex items-start gap-4">
            <Icon name="Star" size={32} className="text-soviet-gold flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold text-white uppercase mb-3">ВАЖНОЕ ОБЪЯВЛЕНИЕ</h3>
              <p className="text-white/80 text-lg">
                Городской округ Люберцы находится в активной стадии строительства. Приглашаем всех граждан следить за новостями о развитии города и метрополитена.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-[#1a1a1a] border-t-2 border-soviet-red py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-soviet-gold rounded-full flex items-center justify-center">
                <img 
                  src="https://cdn.poehali.dev/files/79dc0cfa-ee02-462b-a75b-bbe1d8b3292d.png" 
                  alt="Герб" 
                  className="w-6 h-6 object-contain"
                />
              </div>
              <div>
                <p className="text-white font-bold uppercase text-sm">ЦК КПСС</p>
                <p className="text-white/60 text-xs">Официальный портал</p>
              </div>
            </div>
            <p className="text-white/60 text-sm">© Центральный Комитет КПСС</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;