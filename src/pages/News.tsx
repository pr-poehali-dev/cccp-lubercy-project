import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { getNews, deleteNews, checkAdminAuth } from '@/utils/storage';

const News = () => {
  const [news, setNews] = useState(getNews());
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setIsAdmin(checkAdminAuth());
    setNews(getNews());
  }, []);

  const handleDelete = (id: string) => {
    if (window.confirm('Вы уверены, что хотите удалить эту новость?')) {
      deleteNews(id);
      setNews(getNews());
    }
  };

  const categoryColors: { [key: string]: string } = {
    'Транспорт': 'bg-soviet-blue',
    'Политика': 'bg-soviet-red',
    'Строительство': 'bg-soviet-green',
    'Кадры': 'bg-soviet-gold',
    'Культура': 'bg-purple-600',
    'Технологии': 'bg-blue-500',
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <div className="mb-6">
            <Icon name="Newspaper" size={64} className="text-soviet-gold mx-auto mb-4" />
          </div>
          <h1 className="text-5xl font-bold text-soviet-gold mb-4">Новости государства</h1>
          <p className="text-white/70 text-lg">Официальные события ЦК КПСС</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {news.map((item, index) => (
            <Card 
              key={item.id} 
              className="bg-soviet-gray border-2 border-soviet-red hover:border-soviet-gold transition-all p-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="bg-soviet-red/20 p-4 rounded flex-shrink-0">
                  <Icon name={item.icon as any} size={32} className="text-soviet-gold" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <Badge className={`${categoryColors[item.category]} text-white mb-2`}>
                        {item.category}
                      </Badge>
                      <h2 className="text-2xl font-bold text-white mb-2">{item.title}</h2>
                    </div>
                    {isAdmin && (
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDelete(item.id)}
                        className="ml-4"
                      >
                        <Icon name="Trash2" size={16} />
                      </Button>
                    )}
                  </div>
                  
                  <p className="text-white/70 mb-3">{item.content}</p>
                  
                  <div className="flex items-center gap-2 text-white/50 text-sm">
                    <Icon name="Calendar" size={16} />
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-12">
          <Card className="bg-soviet-gray border-2 border-soviet-gold p-6">
            <div className="flex items-start gap-4">
              <Icon name="Info" size={24} className="text-soviet-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-bold text-lg mb-2">Публикация новостей</h3>
                <p className="text-white/70 text-sm">
                  Новости публикуются администраторами через панель управления. 
                  Если у вас есть важная информация для граждан, свяжитесь с руководством.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default News;
