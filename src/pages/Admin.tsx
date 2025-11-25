import { useState } from 'react';
import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const Admin = () => {
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState({ login: '', password: '' });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginData.login === 'admin' && loginData.password === 'cccp2025') {
      setIsAuthenticated(true);
      toast({
        title: 'Вход выполнен',
        description: 'Добро пожаловать в панель администратора',
      });
    } else {
      toast({
        title: 'Ошибка входа',
        description: 'Неверный логин или пароль',
        variant: 'destructive',
      });
    }
  };

  if (!isAuthenticated) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-md mx-auto">
            <Card className="bg-soviet-gray border-2 border-soviet-gold p-8 animate-fade-in">
              <div className="text-center mb-6">
                <div className="bg-soviet-red/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Lock" size={40} className="text-soviet-gold" />
                </div>
                <h1 className="text-3xl font-bold text-soviet-gold mb-2">Панель администратора</h1>
                <p className="text-white/70">Введите учётные данные для входа</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <Label htmlFor="login" className="text-white">Логин</Label>
                  <Input
                    id="login"
                    value={loginData.login}
                    onChange={(e) => setLoginData({ ...loginData, login: e.target.value })}
                    className="bg-soviet-dark border-soviet-red text-white"
                    placeholder="admin"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="password" className="text-white">Пароль</Label>
                  <Input
                    id="password"
                    type="password"
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    className="bg-soviet-dark border-soviet-red text-white"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-soviet-red hover:bg-soviet-red/80 text-white">
                  Войти
                </Button>

                <p className="text-white/50 text-xs text-center mt-4">
                  Логин: admin | Пароль: cccp2025
                </p>
              </form>
            </Card>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-soviet-gold">Панель администратора</h1>
          <Button 
            onClick={() => setIsAuthenticated(false)}
            variant="outline"
            className="border-soviet-red text-white hover:bg-soviet-red/20"
          >
            <Icon name="LogOut" size={20} className="mr-2" />
            Выйти
          </Button>
        </div>

        <Tabs defaultValue="news" className="space-y-6">
          <TabsList className="bg-soviet-gray border-2 border-soviet-red">
            <TabsTrigger value="news" className="data-[state=active]:bg-soviet-red">
              <Icon name="Newspaper" size={16} className="mr-2" />
              Новости
            </TabsTrigger>
            <TabsTrigger value="decrees" className="data-[state=active]:bg-soviet-red">
              <Icon name="ScrollText" size={16} className="mr-2" />
              Постановления
            </TabsTrigger>
            <TabsTrigger value="lubertsy" className="data-[state=active]:bg-soviet-red">
              <Icon name="Building2" size={16} className="mr-2" />
              Люберцы
            </TabsTrigger>
            <TabsTrigger value="photos" className="data-[state=active]:bg-soviet-red">
              <Icon name="Image" size={16} className="mr-2" />
              Фотографии
            </TabsTrigger>
          </TabsList>

          <TabsContent value="news">
            <Card className="bg-soviet-gray border-2 border-soviet-red p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Добавить новость</h2>
              <form className="space-y-4">
                <div>
                  <Label className="text-white">Заголовок</Label>
                  <Input className="bg-soviet-dark border-soviet-red text-white" placeholder="Введите заголовок новости" />
                </div>
                <div>
                  <Label className="text-white">Содержание</Label>
                  <Textarea className="bg-soviet-dark border-soviet-red text-white min-h-32" placeholder="Текст новости" />
                </div>
                <Button className="bg-soviet-red hover:bg-soviet-red/80">
                  <Icon name="Plus" size={20} className="mr-2" />
                  Опубликовать новость
                </Button>
              </form>
            </Card>
          </TabsContent>

          <TabsContent value="decrees">
            <Card className="bg-soviet-gray border-2 border-soviet-red p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Добавить постановление</h2>
              <form className="space-y-4">
                <div>
                  <Label className="text-white">Номер постановления</Label>
                  <Input className="bg-soviet-dark border-soviet-red text-white" placeholder="№..." />
                </div>
                <div>
                  <Label className="text-white">Заголовок</Label>
                  <Input className="bg-soviet-dark border-soviet-red text-white" placeholder="О..." />
                </div>
                <div>
                  <Label className="text-white">Содержание</Label>
                  <Textarea className="bg-soviet-dark border-soviet-red text-white min-h-40" placeholder="Полный текст постановления" />
                </div>
                <div>
                  <Label className="text-white">Подписант</Label>
                  <Select>
                    <SelectTrigger className="bg-soviet-dark border-soviet-red text-white">
                      <SelectValue placeholder="Выберите подписанта" />
                    </SelectTrigger>
                    <SelectContent className="bg-soviet-gray border-soviet-red">
                      <SelectItem value="stalin">ГенСек Сталин</SelectItem>
                      <SelectItem value="alexey">1й Зам ГенСека Алексей</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="bg-soviet-red hover:bg-soviet-red/80">
                  <Icon name="Plus" size={20} className="mr-2" />
                  Опубликовать постановление
                </Button>
              </form>
            </Card>
          </TabsContent>

          <TabsContent value="lubertsy">
            <Card className="bg-soviet-gray border-2 border-soviet-green p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Управление городом Люберцы</h2>
              <form className="space-y-4">
                <div>
                  <Label className="text-white">Статус строительства</Label>
                  <Select>
                    <SelectTrigger className="bg-soviet-dark border-soviet-red text-white">
                      <SelectValue placeholder="В стадии строительства" />
                    </SelectTrigger>
                    <SelectContent className="bg-soviet-gray border-soviet-red">
                      <SelectItem value="construction">В стадии строительства</SelectItem>
                      <SelectItem value="ready">Город готов</SelectItem>
                      <SelectItem value="expanding">Расширение</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-white">Прогресс строительства (%)</Label>
                  <Input type="number" className="bg-soviet-dark border-soviet-red text-white" placeholder="45" min="0" max="100" />
                </div>
                <div>
                  <Label className="text-white">Новость о городе</Label>
                  <Input className="bg-soviet-dark border-soviet-red text-white" placeholder="Заголовок новости" />
                </div>
                <div>
                  <Label className="text-white">Содержание</Label>
                  <Textarea className="bg-soviet-dark border-soviet-red text-white min-h-24" />
                </div>
                <Button className="bg-soviet-green hover:bg-soviet-green/80">
                  <Icon name="Save" size={20} className="mr-2" />
                  Сохранить изменения
                </Button>
              </form>
            </Card>
          </TabsContent>

          <TabsContent value="photos">
            <Card className="bg-soviet-gray border-2 border-soviet-blue p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Загрузить фотографии</h2>
              <div className="space-y-4">
                <div>
                  <Label className="text-white">Категория</Label>
                  <Select>
                    <SelectTrigger className="bg-soviet-dark border-soviet-red text-white">
                      <SelectValue placeholder="Выберите категорию" />
                    </SelectTrigger>
                    <SelectContent className="bg-soviet-gray border-soviet-red">
                      <SelectItem value="lubertsy">Строительство Люберцев</SelectItem>
                      <SelectItem value="metro">Метрополитен</SelectItem>
                      <SelectItem value="events">Мероприятия</SelectItem>
                      <SelectItem value="other">Прочее</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="border-2 border-dashed border-soviet-red rounded-lg p-12 text-center bg-soviet-dark/50 hover:bg-soviet-dark cursor-pointer transition-colors">
                  <Icon name="Upload" size={48} className="text-soviet-gold mx-auto mb-4" />
                  <p className="text-white mb-2">Нажмите или перетащите фото</p>
                  <p className="text-white/60 text-sm">Поддерживаются форматы: JPG, PNG</p>
                </div>
                <Button className="bg-soviet-blue hover:bg-soviet-blue/80 w-full">
                  <Icon name="Upload" size={20} className="mr-2" />
                  Загрузить фотографии
                </Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Admin;
