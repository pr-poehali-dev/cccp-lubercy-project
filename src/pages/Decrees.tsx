import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Decrees = () => {
  const decrees = [
    {
      id: 1,
      number: '№ 001-2025',
      title: 'О создании государства ЦК КПСС',
      date: '1 октября 2025',
      author: 'ГенСек Сталин',
      content: 'Постановляю: учредить государство Центрального Комитета Коммунистической Партии Советского Союза на территории РП сервера Minecraft. Утвердить структуру власти и основные принципы управления.',
      status: 'Действует',
    },
    {
      id: 2,
      number: '№ 002-2025',
      title: 'О строительстве города Люберцы',
      date: '10 октября 2025',
      author: 'ГенСек Сталин',
      content: 'Постановляю: начать строительство городского округа Люберцы. Назначить Карла Вагнера Главным Бригадиром проекта. Выделить необходимые ресурсы для реализации.',
      status: 'Действует',
    },
    {
      id: 3,
      number: '№ 003-2025',
      title: 'О создании метрополитена',
      date: '15 октября 2025',
      author: '1й Зам ГенСека Алексей',
      content: 'Постановляю: создать систему метрополитена для обеспечения быстрого перемещения граждан. Назначить Дениса Начальником Метрополитена. Начать строительство первой линии.',
      status: 'Действует',
    },
    {
      id: 4,
      number: '№ 004-2025',
      title: 'О структуре вооружённых сил',
      date: '20 октября 2025',
      author: 'ГенСек Сталин',
      content: 'Постановляю: создать Народный Комиссариат Армии. Назначить Даню НарКомом Армии. Утвердить структуру воинских подразделений и правила призыва.',
      status: 'Действует',
    },
    {
      id: 5,
      number: '№ 005-2025',
      title: 'О государственной символике',
      date: '5 ноября 2025',
      author: 'ГенСек Сталин',
      content: 'Постановляю: утвердить государственный флаг с изображением серпа и молота. Утвердить государственный гимн. Символика обязательна к использованию на всех официальных мероприятиях.',
      status: 'Действует',
    },
    {
      id: 6,
      number: '№ 006-2025',
      title: 'О правилах подачи заявок на роли',
      date: '12 ноября 2025',
      author: '1й Зам ГенСека Алексей',
      content: 'Постановляю: утвердить процедуру подачи заявок граждан на получение профессий. Заявки рассматриваются руководством в течение 1-3 рабочих дней. Установить список доступных профессий.',
      status: 'Действует',
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <div className="mb-6">
            <Icon name="ScrollText" size={64} className="text-soviet-gold mx-auto mb-4" />
          </div>
          <h1 className="text-5xl font-bold text-soviet-gold mb-4">Постановления</h1>
          <p className="text-white/70 text-lg">Официальные указы и приказы руководства ЦК КПСС</p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {decrees.map((decree, index) => (
            <Card 
              key={decree.id} 
              className="bg-soviet-gray border-2 border-soviet-gold hover:border-soviet-red transition-all p-8 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Badge className="bg-soviet-red text-white text-lg px-4 py-1">
                      {decree.number}
                    </Badge>
                    <Badge className="bg-soviet-green text-white">
                      {decree.status}
                    </Badge>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-2">{decree.title}</h2>
                </div>
              </div>

              <div className="bg-soviet-dark p-6 rounded mb-4 border-l-4 border-soviet-gold">
                <p className="text-white/90 leading-relaxed">{decree.content}</p>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-white/70">
                    <Icon name="Calendar" size={16} />
                    <span>{decree.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/70">
                    <Icon name="User" size={16} />
                    <span>{decree.author}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-soviet-red/20 rounded-full flex items-center justify-center">
                    <Icon name="Stamp" size={20} className="text-soviet-gold" />
                  </div>
                  <span className="text-white/60 text-xs">Утверждено</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="max-w-5xl mx-auto mt-12">
          <Card className="bg-soviet-gray border-2 border-soviet-blue p-6">
            <div className="flex items-start gap-4">
              <Icon name="Info" size={24} className="text-soviet-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-bold text-lg mb-2">О постановлениях</h3>
                <ul className="text-white/70 text-sm space-y-1">
                  <li>• Все постановления имеют силу закона и обязательны к исполнению</li>
                  <li>• Постановления подписываются ГенСеком или его заместителем</li>
                  <li>• Нарушение постановлений влечёт административную ответственность</li>
                  <li>• Новые постановления публикуются через панель администратора</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Decrees;
