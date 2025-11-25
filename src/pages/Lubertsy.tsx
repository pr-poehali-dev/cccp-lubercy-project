import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { getLubertsyStatus, getLubertsyPhotos, getLubertsyNews } from '@/utils/storage';
import { checkAdminAuth } from '@/utils/adminAuth';

const Lubertsy = () => {
  const navigate = useNavigate();
  const [constructionStatus, setConstructionStatus] = useState(getLubertsyStatus());
  const [gallery, setGallery] = useState(getLubertsyPhotos());
  const [news, setNews] = useState(getLubertsyNews());
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setIsAdmin(checkAdminAuth());
    setConstructionStatus(getLubertsyStatus());
    setGallery(getLubertsyPhotos());
    setNews(getLubertsyNews());
  }, []);

  const cityHead = {
    name: 'Вагнер',
    role: 'Главный Бригадир городского округа Люберцы',
    description: 'Руководит строительством и развитием города',
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-4 mb-4">
            <h1 className="text-5xl font-bold text-soviet-gold">Городской округ Люберцы</h1>
            {isAdmin && (
              <Button
                onClick={() => navigate('/admin')}
                className="bg-soviet-gold hover:bg-soviet-gold/80 text-soviet-dark"
              >
                <Icon name="Settings" size={20} className="mr-2" />
                Редактировать
              </Button>
            )}
          </div>
          <Badge className="bg-soviet-green text-white text-lg px-6 py-2">
            {constructionStatus.status}
          </Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card className="bg-soviet-gray border-2 border-soviet-green p-6 animate-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="Construction" size={32} className="text-soviet-gold" />
                <h2 className="text-3xl font-bold text-white">Статус строительства</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-white mb-2">
                    <span>Общий прогресс</span>
                    <span className="text-soviet-gold font-bold">{constructionStatus.progress}%</span>
                  </div>
                  <div className="w-full bg-soviet-dark rounded-full h-4 overflow-hidden">
                    <div 
                      className="bg-soviet-green h-full transition-all duration-500"
                      style={{ width: `${constructionStatus.progress}%` }}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-soviet-dark p-4 rounded">
                    <p className="text-white/60 text-sm mb-1">Дата начала</p>
                    <p className="text-white font-bold">{constructionStatus.startDate}</p>
                  </div>
                  <div className="bg-soviet-dark p-4 rounded">
                    <p className="text-white/60 text-sm mb-1">Статус</p>
                    <p className="text-soviet-green font-bold">Активно</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-soviet-gray border-2 border-soviet-blue p-6 animate-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="Image" size={32} className="text-soviet-gold" />
                <h2 className="text-3xl font-bold text-white">Фото города</h2>
              </div>
              
              {gallery.length === 0 ? (
                <div className="text-center py-12 bg-soviet-dark rounded">
                  <Icon name="ImageOff" size={48} className="text-white/30 mx-auto mb-4" />
                  <p className="text-white/60">Фотографии скоро появятся</p>
                  <p className="text-white/40 text-sm mt-2">Администраторы могут добавить фото через панель управления</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {gallery.map((photo) => (
                    <div key={photo.id} className="aspect-square bg-soviet-dark rounded overflow-hidden">
                      <img src={photo.url} alt={photo.caption} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </Card>

            {news.length > 0 && (
              <Card className="bg-soviet-gray border-2 border-soviet-red p-6 animate-fade-in">
                <div className="flex items-center gap-3 mb-6">
                  <Icon name="Newspaper" size={32} className="text-soviet-gold" />
                  <h2 className="text-3xl font-bold text-white">Новости города</h2>
                </div>
                
                <div className="space-y-4">
                  {news.map((item) => (
                    <div key={item.id} className="bg-soviet-dark p-4 rounded border-l-4 border-soviet-gold">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-white font-bold text-lg">{item.title}</h3>
                        <span className="text-white/60 text-sm whitespace-nowrap ml-4">{item.date}</span>
                      </div>
                      <p className="text-white/70">{item.content}</p>
                    </div>
                  ))}
                </div>
              </Card>
            )}
          </div>

          <div>
            <Card className="bg-soviet-gray border-2 border-soviet-gold p-6 animate-fade-in sticky top-4">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="User" size={32} className="text-soviet-gold" />
                <h2 className="text-2xl font-bold text-white">Глава города</h2>
              </div>
              
              <div className="text-center">
                <Avatar className="w-32 h-32 mx-auto mb-4 border-4 border-soviet-gold">
                  <AvatarFallback className="bg-soviet-red text-white text-4xl font-bold">
                    В
                  </AvatarFallback>
                </Avatar>
                
                <h3 className="text-2xl font-bold text-soviet-gold mb-2">{cityHead.name}</h3>
                <p className="text-white text-sm mb-4">{cityHead.role}</p>
                <p className="text-white/60 text-sm">{cityHead.description}</p>
              </div>

              <div className="mt-6 pt-6 border-t border-soviet-red">
                <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                  <Icon name="Info" size={18} />
                  О городе
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/60">Тип</span>
                    <span className="text-white">Городской округ</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Статус</span>
                    <span className="text-soviet-green">Строится</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Основан</span>
                    <span className="text-white">2025</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Lubertsy;
