import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const officials = {
  leadership: [
    { name: 'Сталин', role: 'ГенСек ЦК КПСС', fullRole: 'Генеральный Секретарь Центрального Комитета Коммунистической Партии Советского Союза', avatar: '' },
    { name: 'Алексей', role: '1й Зам ГенСека ЦК КПСС', fullRole: 'Первый Заместитель Генерального Секретаря ЦК КПСС', avatar: '' },
  ],
  government: [
    { name: 'Карл', role: 'Главный Бригадир', fullRole: 'Главный Бригадир городского округа Люберцы', avatar: '' },
    { name: 'Денис', role: 'Начальник Метрополитена', fullRole: 'Начальник Метрополитена', avatar: '' },
    { name: 'Блохин', role: 'НарКом ТяжПрома', fullRole: 'Народный Комиссар Тяжёлой Промышленности', avatar: '' },
    { name: 'Илья', role: 'Глава г.о. Энгельс', fullRole: 'Глава Городского Образования "Энгельс"', avatar: '' },
  ],
  army: [
    { name: 'Даня', role: 'НарКом Армии', fullRole: 'Народный Комиссар Армии', avatar: '' },
  ],
  citizens: [
    { name: 'Егор', role: 'Гражданин', avatar: '' },
    { name: 'Седой', role: 'Гражданин', avatar: '' },
    { name: 'Матвей', role: 'Гражданин', avatar: '' },
    { name: 'Беляев', role: 'Гражданин', avatar: '' },
    { name: 'ТВ', role: 'Гражданин', avatar: '' },
  ],
};

const OfficialCard = ({ name, role, fullRole, avatar }: { name: string; role: string; fullRole?: string; avatar?: string }) => (
  <Card className="bg-soviet-gray border-2 border-soviet-red hover:border-soviet-gold transition-all duration-300 p-6 animate-fade-in">
    <div className="flex flex-col items-center text-center gap-4">
      <Avatar className="w-24 h-24 border-4 border-soviet-gold">
        <AvatarImage src={avatar} alt={name} />
        <AvatarFallback className="bg-soviet-red text-white text-2xl font-bold">
          {name.charAt(0)}
        </AvatarFallback>
      </Avatar>
      
      <div>
        <h3 className="text-2xl font-bold text-soviet-gold mb-1">{name}</h3>
        <p className="text-white text-sm mb-2">{role}</p>
        {fullRole && (
          <p className="text-white/60 text-xs">{fullRole}</p>
        )}
      </div>
    </div>
  </Card>
);

const Structure = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-soviet-gold mb-4">Структура власти</h1>
          <p className="text-white/70 text-lg">Руководство государства ЦК КПСС</p>
        </div>

        <div className="space-y-12">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-soviet-red p-3 rounded">
                <Icon name="Crown" size={32} className="text-soviet-gold" />
              </div>
              <h2 className="text-3xl font-bold text-white">Высшее руководство</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {officials.leadership.map((official) => (
                <OfficialCard key={official.name} {...official} />
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-soviet-blue p-3 rounded">
                <Icon name="Briefcase" size={32} className="text-soviet-gold" />
              </div>
              <h2 className="text-3xl font-bold text-white">Правительство</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {officials.government.map((official) => (
                <OfficialCard key={official.name} {...official} />
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-soviet-green p-3 rounded">
                <Icon name="Shield" size={32} className="text-soviet-gold" />
              </div>
              <h2 className="text-3xl font-bold text-white">Армия</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {officials.army.map((official) => (
                <OfficialCard key={official.name} {...official} />
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-soviet-gray border-2 border-soviet-gold p-3 rounded">
                <Icon name="Users" size={32} className="text-soviet-gold" />
              </div>
              <h2 className="text-3xl font-bold text-white">Граждане</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {officials.citizens.map((official) => (
                <OfficialCard key={official.name} {...official} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Structure;
