import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Metro = () => {
  const rules = [
    { id: 1, title: 'Соблюдайте порядок', description: 'Не бегайте по эскалаторам и платформам' },
    { id: 2, title: 'Безопасность', description: 'Стойте за жёлтой линией при подходе поезда' },
    { id: 3, title: 'Билеты', description: 'Приобретайте билеты перед входом на станцию' },
    { id: 4, title: 'Уважение', description: 'Уступайте места пожилым гражданам' },
    { id: 5, title: 'Чистота', description: 'Не мусорите в вагонах и на станциях' },
    { id: 6, title: 'Тишина', description: 'Соблюдайте тишину, не шумите в вагонах' },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <div className="mb-6">
            <Icon name="Train" size={64} className="text-soviet-gold mx-auto mb-4" />
          </div>
          <h1 className="text-5xl font-bold text-soviet-gold mb-4">Метрополитен ЦК КПСС</h1>
          <p className="text-white/70 text-lg">Скоростная подземная транспортная система</p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          <Card className="bg-soviet-gray border-2 border-soviet-blue p-8 animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-soviet-blue/20 p-4 rounded">
                <Icon name="Info" size={32} className="text-soviet-gold" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">О метрополитене</h2>
                <p className="text-white/70">Начальник: Денис</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-soviet-dark p-6 rounded text-center">
                <Icon name="MapPin" size={32} className="text-soviet-gold mx-auto mb-3" />
                <p className="text-white/60 text-sm mb-1">Станций</p>
                <p className="text-white text-2xl font-bold">В разработке</p>
              </div>
              <div className="bg-soviet-dark p-6 rounded text-center">
                <Icon name="Route" size={32} className="text-soviet-gold mx-auto mb-3" />
                <p className="text-white/60 text-sm mb-1">Линий</p>
                <p className="text-white text-2xl font-bold">В разработке</p>
              </div>
              <div className="bg-soviet-dark p-6 rounded text-center">
                <Icon name="Clock" size={32} className="text-soviet-gold mx-auto mb-3" />
                <p className="text-white/60 text-sm mb-1">Режим работы</p>
                <p className="text-white text-2xl font-bold">24/7</p>
              </div>
            </div>
          </Card>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <Icon name="ShieldCheck" size={32} className="text-soviet-gold" />
              <h2 className="text-3xl font-bold text-white">Правила метрополитена</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {rules.map((rule) => (
                <Card key={rule.id} className="bg-soviet-gray border-2 border-soviet-red hover:border-soviet-gold transition-all p-6 animate-fade-in">
                  <div className="flex items-start gap-4">
                    <div className="bg-soviet-red/20 p-3 rounded flex-shrink-0">
                      <span className="text-soviet-gold font-bold text-xl">{rule.id}</span>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">{rule.title}</h3>
                      <p className="text-white/70 text-sm">{rule.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <Card className="bg-soviet-gray border-2 border-soviet-gold p-8 animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <Icon name="AlertTriangle" size={32} className="text-soviet-gold" />
              <h2 className="text-3xl font-bold text-white">Важная информация</h2>
            </div>
            
            <div className="space-y-4 text-white/70">
              <div className="flex items-start gap-3">
                <Icon name="Circle" size={12} className="text-soviet-gold mt-1 flex-shrink-0" />
                <p>Нарушение правил метрополитена карается штрафом или запретом на проезд</p>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Circle" size={12} className="text-soviet-gold mt-1 flex-shrink-0" />
                <p>При обнаружении подозрительных предметов немедленно сообщите машинисту или охране</p>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Circle" size={12} className="text-soviet-gold mt-1 flex-shrink-0" />
                <p>Проезд без билета запрещён и влечёт административную ответственность</p>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Circle" size={12} className="text-soviet-gold mt-1 flex-shrink-0" />
                <p>В случае чрезвычайной ситуации следуйте указаниям персонала метрополитена</p>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-soviet-gray border-2 border-soviet-green p-6">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="UserPlus" size={24} className="text-soviet-gold" />
                <h3 className="text-white font-bold text-xl">Вакансии</h3>
              </div>
              <ul className="text-white/70 space-y-2 text-sm">
                <li>• Машинист поезда метрополитена</li>
                <li>• Строитель метрополитена</li>
                <li>• Дежурный по станции</li>
                <li>• Охранник метрополитена</li>
              </ul>
              <p className="text-white/50 text-xs mt-4">
                Подать заявку можно в разделе "Запрос роли"
              </p>
            </Card>

            <Card className="bg-soviet-gray border-2 border-soviet-blue p-6">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Phone" size={24} className="text-soviet-gold" />
                <h3 className="text-white font-bold text-xl">Контакты</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-white/60 mb-1">Начальник метрополитена</p>
                  <p className="text-white font-bold">Денис</p>
                </div>
                <div>
                  <p className="text-white/60 mb-1">По вопросам работы</p>
                  <p className="text-white">Обращайтесь в игре или Discord</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Metro;
