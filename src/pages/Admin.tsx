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
import { loginAdmin, logoutAdmin, checkAdminAuth } from '@/utils/adminAuth';
import { addNews, addDecree, saveLubertsyStatus, getLubertsyStatus, saveMetroInfo, getMetroInfo } from '@/utils/storage';

const Admin = () => {
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(checkAdminAuth());
  const [password, setPassword] = useState('');

  // Forms state
  const [newsForm, setNewsForm] = useState({ title: '', content: '', category: '', icon: '' });
  const [decreeForm, setDecreeForm] = useState({ number: '', title: '', content: '', author: '' });
  const [lubertsyStatus, setLubertsyStatus] = useState(getLubertsyStatus());
  const [metroInfo, setMetroInfo] = useState(getMetroInfo());

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginAdmin(password)) {
      setIsAuthenticated(true);
      toast({
        title: 'Вход выполнен',
        description: 'Добро пожаловать в панель администратора',
      });
    } else {
      toast({
        title: 'Ошибка входа',
        description: 'Неверный пароль',
        variant: 'destructive',
      });
    }
  };

  const handleLogout = () => {
    logoutAdmin();
    setIsAuthenticated(false);
    toast({ title: 'Выход выполнен' });
  };

  const handleAddNews = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsForm.title || !newsForm.content || !newsForm.category) {
      toast({ title: 'Ошибка', description: 'Заполните все поля', variant: 'destructive' });
      return;
    }
    
    addNews({
      title: newsForm.title,
      content: newsForm.content,
      category: newsForm.category,
      icon: newsForm.icon || 'Newspaper',
      date: new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' }),
    });
    
    setNewsForm({ title: '', content: '', category: '', icon: '' });
    toast({ title: 'Новость опубликована' });
  };

  const handleAddDecree = (e: React.FormEvent) => {
    e.preventDefault();
    if (!decreeForm.number || !decreeForm.title || !decreeForm.content || !decreeForm.author) {
      toast({ title: 'Ошибка', description: 'Заполните все поля', variant: 'destructive' });
      return;
    }
    
    addDecree({
      number: decreeForm.number,
      title: decreeForm.title,
      content: decreeForm.content,
      author: decreeForm.author,
      status: 'Действует',
      date: new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' }),
    });
    
    setDecreeForm({ number: '', title: '', content: '', author: '' });
    toast({ title: 'Постановление опубликовано' });
  };

  const handleSaveLubertsyStatus = (e: React.FormEvent) => {
    e.preventDefault();
    saveLubertsyStatus(lubertsyStatus);
    toast({ title: 'Статус Люберцев обновлён' });
  };

  const handleSaveMetroInfo = (e: React.FormEvent) => {
    e.preventDefault();
    saveMetroInfo(metroInfo);
    toast({ title: 'Информация о метро обновлена' });
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
                <p className="text-white/70">Введите пароль для входа</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <Label htmlFor="password" className="text-white">Пароль</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-soviet-dark border-soviet-red text-white"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-soviet-red hover:bg-soviet-red/80 text-white">
                  Войти
                </Button>
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
            onClick={handleLogout}
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
            <TabsTrigger value="metro" className="data-[state=active]:bg-soviet-red">
              <Icon name="Train" size={16} className="mr-2" />
              Метро
            </TabsTrigger>
          </TabsList>

          <TabsContent value="news">
            <Card className="bg-soviet-gray border-2 border-soviet-red p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Добавить новость</h2>
              <form onSubmit={handleAddNews} className="space-y-4">
                <div>
                  <Label className="text-white">Заголовок</Label>
                  <Input 
                    className="bg-soviet-dark border-soviet-red text-white" 
                    placeholder="Введите заголовок новости" 
                    value={newsForm.title}
                    onChange={(e) => setNewsForm({ ...newsForm, title: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label className="text-white">Категория</Label>
                  <Select value={newsForm.category} onValueChange={(value) => setNewsForm({ ...newsForm, category: value })}>
                    <SelectTrigger className="bg-soviet-dark border-soviet-red text-white">
                      <SelectValue placeholder="Выберите категорию" />
                    </SelectTrigger>
                    <SelectContent className="bg-soviet-gray border-soviet-red">
                      <SelectItem value="Политика">Политика</SelectItem>
                      <SelectItem value="Транспорт">Транспорт</SelectItem>
                      <SelectItem value="Кадры">Кадры</SelectItem>
                      <SelectItem value="Строительство">Строительство</SelectItem>
                      <SelectItem value="Культура">Культура</SelectItem>
                      <SelectItem value="Технологии">Технологии</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-white">Иконка (необязательно)</Label>
                  <Input 
                    className="bg-soviet-dark border-soviet-red text-white" 
                    placeholder="Train, Building2, Users и т.д." 
                    value={newsForm.icon}
                    onChange={(e) => setNewsForm({ ...newsForm, icon: e.target.value })}
                  />
                </div>
                <div>
                  <Label className="text-white">Содержание</Label>
                  <Textarea 
                    className="bg-soviet-dark border-soviet-red text-white min-h-32" 
                    placeholder="Текст новости" 
                    value={newsForm.content}
                    onChange={(e) => setNewsForm({ ...newsForm, content: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="bg-soviet-red hover:bg-soviet-red/80">
                  <Icon name="Plus" size={20} className="mr-2" />
                  Опубликовать новость
                </Button>
              </form>
            </Card>
          </TabsContent>

          <TabsContent value="decrees">
            <Card className="bg-soviet-gray border-2 border-soviet-red p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Добавить постановление</h2>
              <form onSubmit={handleAddDecree} className="space-y-4">
                <div>
                  <Label className="text-white">Номер постановления</Label>
                  <Input 
                    className="bg-soviet-dark border-soviet-red text-white" 
                    placeholder="№..." 
                    value={decreeForm.number}
                    onChange={(e) => setDecreeForm({ ...decreeForm, number: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label className="text-white">Заголовок</Label>
                  <Input 
                    className="bg-soviet-dark border-soviet-red text-white" 
                    placeholder="О..." 
                    value={decreeForm.title}
                    onChange={(e) => setDecreeForm({ ...decreeForm, title: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label className="text-white">Содержание</Label>
                  <Textarea 
                    className="bg-soviet-dark border-soviet-red text-white min-h-40" 
                    placeholder="Полный текст постановления" 
                    value={decreeForm.content}
                    onChange={(e) => setDecreeForm({ ...decreeForm, content: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label className="text-white">Подписант</Label>
                  <Select value={decreeForm.author} onValueChange={(value) => setDecreeForm({ ...decreeForm, author: value })}>
                    <SelectTrigger className="bg-soviet-dark border-soviet-red text-white">
                      <SelectValue placeholder="Выберите подписанта" />
                    </SelectTrigger>
                    <SelectContent className="bg-soviet-gray border-soviet-red">
                      <SelectItem value="ГенСек Сталин">ГенСек Сталин</SelectItem>
                      <SelectItem value="1й Зам ГенСека Алексей">1й Зам ГенСека Алексей</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button type="submit" className="bg-soviet-red hover:bg-soviet-red/80">
                  <Icon name="Plus" size={20} className="mr-2" />
                  Опубликовать постановление
                </Button>
              </form>
            </Card>
          </TabsContent>

          <TabsContent value="lubertsy">
            <Card className="bg-soviet-gray border-2 border-soviet-green p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Управление городом Люберцы</h2>
              <form onSubmit={handleSaveLubertsyStatus} className="space-y-4">
                <div>
                  <Label className="text-white">Статус строительства</Label>
                  <Input 
                    className="bg-soviet-dark border-soviet-red text-white" 
                    placeholder="В стадии строительства" 
                    value={lubertsyStatus.status}
                    onChange={(e) => setLubertsyStatus({ ...lubertsyStatus, status: e.target.value })}
                  />
                </div>
                <div>
                  <Label className="text-white">Прогресс (%)</Label>
                  <Input 
                    type="number" 
                    min="0" 
                    max="100" 
                    className="bg-soviet-dark border-soviet-red text-white" 
                    value={lubertsyStatus.progress}
                    onChange={(e) => setLubertsyStatus({ ...lubertsyStatus, progress: parseInt(e.target.value) || 0 })}
                  />
                </div>
                <div>
                  <Label className="text-white">Дата начала</Label>
                  <Input 
                    className="bg-soviet-dark border-soviet-red text-white" 
                    value={lubertsyStatus.startDate}
                    onChange={(e) => setLubertsyStatus({ ...lubertsyStatus, startDate: e.target.value })}
                  />
                </div>
                <Button type="submit" className="bg-soviet-green hover:bg-soviet-green/80">
                  <Icon name="Save" size={20} className="mr-2" />
                  Сохранить изменения
                </Button>
              </form>
            </Card>
          </TabsContent>

          <TabsContent value="metro">
            <Card className="bg-soviet-gray border-2 border-soviet-blue p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Управление метрополитеном</h2>
              <form onSubmit={handleSaveMetroInfo} className="space-y-4">
                <div>
                  <Label className="text-white">Количество станций</Label>
                  <Input 
                    type="number" 
                    min="0" 
                    className="bg-soviet-dark border-soviet-red text-white" 
                    value={metroInfo.stations}
                    onChange={(e) => setMetroInfo({ ...metroInfo, stations: parseInt(e.target.value) || 0 })}
                  />
                </div>
                <div>
                  <Label className="text-white">Количество линий</Label>
                  <Input 
                    type="number" 
                    min="0" 
                    className="bg-soviet-dark border-soviet-red text-white" 
                    value={metroInfo.lines}
                    onChange={(e) => setMetroInfo({ ...metroInfo, lines: parseInt(e.target.value) || 0 })}
                  />
                </div>
                <div>
                  <Label className="text-white">Статус</Label>
                  <Select value={metroInfo.status} onValueChange={(value) => setMetroInfo({ ...metroInfo, status: value })}>
                    <SelectTrigger className="bg-soviet-dark border-soviet-red text-white">
                      <SelectValue placeholder="Выберите статус" />
                    </SelectTrigger>
                    <SelectContent className="bg-soviet-gray border-soviet-red">
                      <SelectItem value="В разработке">В разработке</SelectItem>
                      <SelectItem value="Строится">Строится</SelectItem>
                      <SelectItem value="Готово">Готово</SelectItem>
                      <SelectItem value="24/7">24/7</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button type="submit" className="bg-soviet-blue hover:bg-soviet-blue/80">
                  <Icon name="Save" size={20} className="mr-2" />
                  Сохранить изменения
                </Button>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Admin;
