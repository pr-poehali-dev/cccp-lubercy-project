import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Anthem = () => {
  const anthemText = [
    {
      verse: 1,
      lines: [
        'Союз нерушимый свободных кубов',
        'Сплотила навеки великая воля.',
        'Да здравствует созданный волей блоков',
        'Единый, могучий РП наш-портал!',
      ],
    },
    {
      verse: 'Припев',
      lines: [
        'Славься, Отечество наше пиксельное,',
        'Братских народов союз вековой,',
        'Партия Ленина — сила блоковая',
        'Нас к торжеству коммунизма ведёт!',
      ],
    },
    {
      verse: 2,
      lines: [
        'Сквозь грозы сияло нам солнце свободы,',
        'И Сталин великий нам путь озарил,',
        'На правое дело он поднял народы,',
        'На труд и на подвиги нас вдохновил!',
      ],
    },
    {
      verse: 'Припев',
      lines: [
        'Славься, Отечество наше пиксельное,',
        'Братских народов союз вековой,',
        'Партия Ленина — сила блоковая',
        'Нас к торжеству коммунизма ведёт!',
      ],
    },
    {
      verse: 3,
      lines: [
        'В победе бессмертных идей коммунизма',
        'Мы видим грядущее нашей страны,',
        'И Красному знамени славной Отчизны',
        'Мы будем всегда беззаветно верны!',
      ],
    },
    {
      verse: 'Припев',
      lines: [
        'Славься, Отечество наше пиксельное,',
        'Братских народов союз вековой,',
        'Партия Ленина — сила блоковая',
        'Нас к торжеству коммунизма ведёт!',
      ],
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <div className="mb-6">
            <Icon name="Music" size={64} className="text-soviet-gold mx-auto mb-4" />
          </div>
          <h1 className="text-5xl font-bold text-soviet-gold mb-4">Государственный гимн ЦК КПСС</h1>
          <p className="text-white/70 text-lg">Исполняется под мелодию гимна Советского Союза</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="bg-soviet-gray border-2 border-soviet-gold p-8 mb-8 animate-fade-in">
            <div className="flex items-center justify-center gap-4 mb-8 p-4 bg-soviet-red/20 rounded">
              <Icon name="Volume2" size={32} className="text-soviet-gold" />
              <p className="text-white/80 text-center">
                При исполнении гимна все присутствующие встают
              </p>
            </div>

            <div className="space-y-8">
              {anthemText.map((section, idx) => (
                <div key={idx} className="text-center">
                  <div className="mb-4">
                    <span className="text-soviet-gold font-bold text-lg">
                      {typeof section.verse === 'number' ? `Куплет ${section.verse}` : section.verse}
                    </span>
                  </div>
                  <div className="space-y-2">
                    {section.lines.map((line, lineIdx) => (
                      <p key={lineIdx} className="text-white text-lg leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-soviet-gray border-2 border-soviet-red p-6">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="FileText" size={24} className="text-soviet-gold" />
                <h3 className="text-white font-bold text-xl">О гимне</h3>
              </div>
              <p className="text-white/70 text-sm">
                Государственный гимн ЦК КПСС был создан в честь основания государства на РП сервере. 
                Музыка основана на легендарном гимне СССР, слова адаптированы под реалии виртуального мира.
              </p>
            </Card>

            <Card className="bg-soviet-gray border-2 border-soviet-blue p-6">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Info" size={24} className="text-soviet-gold" />
                <h3 className="text-white font-bold text-xl">Правила</h3>
              </div>
              <ul className="text-white/70 text-sm space-y-2">
                <li>• Гимн исполняется на всех официальных мероприятиях</li>
                <li>• При исполнении все граждане встают</li>
                <li>• Проявление неуважения к гимну карается</li>
              </ul>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-block bg-soviet-gray border-2 border-soviet-gold px-8 py-4">
              <p className="text-soviet-gold font-bold text-lg">
                ⭐ СЛАВА ЦК КПСС! ⭐
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Anthem;
