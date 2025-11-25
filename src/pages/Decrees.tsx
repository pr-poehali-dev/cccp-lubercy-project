import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { getDecrees, deleteDecree, checkAdminAuth } from '@/utils/storage';

const Decrees = () => {
  const [decrees, setDecrees] = useState(getDecrees());
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setIsAdmin(checkAdminAuth());
    setDecrees(getDecrees());
  }, []);

  const handleDelete = (id: string) => {
    if (window.confirm('Вы уверены, что хотите удалить это постановление?')) {
      deleteDecree(id);
      setDecrees(getDecrees());
    }
  };

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
          {decrees.length === 0 ? (
            <Card className="bg-soviet-gray border-2 border-soviet-gold p-12 text-center">
              <Icon name="FileX" size={48} className="text-white/30 mx-auto mb-4" />
              <p className="text-white/60 text-lg">Постановления пока не опубликованы</p>
              <p className="text-white/40 text-sm mt-2">Администраторы могут добавить постановления через панель управления</p>
            </Card>
          ) : (
            decrees.map((decree, index) => (
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
                  {isAdmin && (
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(decree.id)}
                      className="ml-4"
                    >
                      <Icon name="Trash2" size={16} />
                    </Button>
                  )}
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
            ))
          )}
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
