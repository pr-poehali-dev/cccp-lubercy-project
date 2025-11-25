import { useState } from 'react';
import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const roles = [
  { value: 'builder', label: 'Строитель', icon: 'Hammer' },
  { value: 'metro-builder', label: 'Строитель метрополитена', icon: 'Drill' },
  { value: 'driver', label: 'Машинист поезда', icon: 'Train' },
  { value: 'farmer', label: 'Фермер', icon: 'Wheat' },
  { value: 'miner', label: 'Шахтёр', icon: 'Pickaxe' },
  { value: 'engineer', label: 'Инженер', icon: 'Wrench' },
  { value: 'doctor', label: 'Врач', icon: 'Heart' },
  { value: 'teacher', label: 'Учитель', icon: 'BookOpen' },
  { value: 'guard', label: 'Охранник', icon: 'ShieldCheck' },
  { value: 'merchant', label: 'Торговец', icon: 'Store' },
];

const RoleRequest = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nickname: '',
    role: '',
    experience: '',
    motivation: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nickname || !formData.role || !formData.motivation) {
      toast({
        title: 'Ошибка',
        description: 'Заполните все обязательные поля',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'Заявка отправлена!',
      description: 'Ваша заявка будет рассмотрена руководством',
    });

    setFormData({
      nickname: '',
      role: '',
      experience: '',
      motivation: '',
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-soviet-gold mb-4">Запрос роли</h1>
          <p className="text-white/70 text-lg">Подайте заявку на получение профессии в государстве ЦК КПСС</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {roles.map((role) => (
              <Card key={role.value} className="bg-soviet-gray border-2 border-soviet-red hover:border-soviet-gold transition-all p-4 cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="bg-soviet-red/20 p-2 rounded">
                    <Icon name={role.icon as any} size={24} className="text-soviet-gold" />
                  </div>
                  <span className="text-white font-bold">{role.label}</span>
                </div>
              </Card>
            ))}
          </div>

          <Card className="bg-soviet-gray border-2 border-soviet-gold p-8 animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="nickname" className="text-white text-lg mb-2 block">
                  Ваш никнейм в Minecraft *
                </Label>
                <Input
                  id="nickname"
                  value={formData.nickname}
                  onChange={(e) => setFormData({ ...formData, nickname: e.target.value })}
                  placeholder="Введите ваш игровой никнейм"
                  className="bg-soviet-dark border-soviet-red text-white"
                  required
                />
              </div>

              <div>
                <Label htmlFor="role" className="text-white text-lg mb-2 block">
                  Желаемая профессия *
                </Label>
                <Select 
                  value={formData.role} 
                  onValueChange={(value) => setFormData({ ...formData, role: value })}
                >
                  <SelectTrigger className="bg-soviet-dark border-soviet-red text-white">
                    <SelectValue placeholder="Выберите профессию" />
                  </SelectTrigger>
                  <SelectContent className="bg-soviet-gray border-soviet-red">
                    {roles.map((role) => (
                      <SelectItem key={role.value} value={role.value} className="text-white">
                        {role.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="experience" className="text-white text-lg mb-2 block">
                  Опыт работы (необязательно)
                </Label>
                <Input
                  id="experience"
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  placeholder="Расскажите о вашем опыте"
                  className="bg-soviet-dark border-soviet-red text-white"
                />
              </div>

              <div>
                <Label htmlFor="motivation" className="text-white text-lg mb-2 block">
                  Почему вы хотите получить эту роль? *
                </Label>
                <Textarea
                  id="motivation"
                  value={formData.motivation}
                  onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                  placeholder="Расскажите о своей мотивации"
                  className="bg-soviet-dark border-soviet-red text-white min-h-32"
                  required
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-soviet-red hover:bg-soviet-red/80 text-white text-lg py-6"
              >
                <Icon name="Send" size={20} className="mr-2" />
                Отправить заявку
              </Button>

              <p className="text-white/60 text-sm text-center">
                * Обязательные поля для заполнения
              </p>
            </form>
          </Card>

          <Card className="bg-soviet-gray border-2 border-soviet-blue p-6 mt-8">
            <div className="flex items-start gap-4">
              <Icon name="Info" size={24} className="text-soviet-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-bold text-lg mb-2">Информация о рассмотрении заявок</h3>
                <ul className="text-white/70 space-y-1 text-sm">
                  <li>• Заявки рассматриваются руководством ЦК КПСС</li>
                  <li>• Срок рассмотрения: 1-3 рабочих дня</li>
                  <li>• О результатах вы узнаете в игре или на сервере Discord</li>
                  <li>• Одобренные заявки получают назначение и инструкции</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default RoleRequest;
