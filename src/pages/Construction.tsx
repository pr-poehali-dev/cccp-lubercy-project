import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { checkAdminAuth } from '@/utils/adminAuth';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface Project {
  id: string;
  name: string;
  progress: number;
  status: string;
  description: string;
  startDate: string;
}

const Construction = () => {
  const { toast } = useToast();
  const isAdmin = checkAdminAuth();
  const [projects, setProjects] = useState<Project[]>(() => {
    const stored = localStorage.getItem('cccp_construction_projects');
    return stored ? JSON.parse(stored) : [
      {
        id: '1',
        name: 'Главная площадь',
        progress: 65,
        status: 'В процессе',
        description: 'Центральная площадь с монументом',
        startDate: '1 ноября 2025',
      },
      {
        id: '2',
        name: 'Жилой квартал №1',
        progress: 40,
        status: 'В процессе',
        description: 'Первый жилой массив города',
        startDate: '5 ноября 2025',
      },
    ];
  });

  const [editProject, setEditProject] = useState<Project | null>(null);
  const [newProject, setNewProject] = useState({
    name: '',
    progress: 0,
    status: 'В процессе',
    description: '',
    startDate: new Date().toLocaleDateString('ru-RU'),
  });

  useEffect(() => {
    localStorage.setItem('cccp_construction_projects', JSON.stringify(projects));
  }, [projects]);

  const handleAddProject = () => {
    if (!newProject.name || !newProject.description) {
      toast({ title: 'Ошибка', description: 'Заполните все поля', variant: 'destructive' });
      return;
    }

    const project: Project = {
      id: Date.now().toString(),
      ...newProject,
    };

    setProjects([...projects, project]);
    setNewProject({
      name: '',
      progress: 0,
      status: 'В процессе',
      description: '',
      startDate: new Date().toLocaleDateString('ru-RU'),
    });
    toast({ title: 'Проект добавлен' });
  };

  const handleUpdateProject = () => {
    if (!editProject) return;
    
    setProjects(projects.map(p => p.id === editProject.id ? editProject : p));
    setEditProject(null);
    toast({ title: 'Проект обновлён' });
  };

  const handleDeleteProject = (id: string) => {
    setProjects(projects.filter(p => p.id !== id));
    toast({ title: 'Проект удалён' });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-12 animate-fade-in">
          <div>
            <h1 className="text-5xl font-bold text-soviet-gold mb-4">Строительство</h1>
            <p className="text-white/70 text-lg">Активные строительные проекты государства</p>
          </div>

          {isAdmin && (
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-soviet-green hover:bg-soviet-green/80">
                  <Icon name="Plus" size={20} className="mr-2" />
                  Добавить проект
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-soviet-gray border-soviet-gold">
                <DialogHeader>
                  <DialogTitle className="text-white">Новый строительный проект</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label className="text-white">Название</Label>
                    <Input
                      value={newProject.name}
                      onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                      className="bg-soviet-dark border-soviet-red text-white"
                    />
                  </div>
                  <div>
                    <Label className="text-white">Описание</Label>
                    <Textarea
                      value={newProject.description}
                      onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                      className="bg-soviet-dark border-soviet-red text-white"
                    />
                  </div>
                  <div>
                    <Label className="text-white">Прогресс (%)</Label>
                    <Input
                      type="number"
                      min="0"
                      max="100"
                      value={newProject.progress}
                      onChange={(e) => setNewProject({ ...newProject, progress: parseInt(e.target.value) })}
                      className="bg-soviet-dark border-soviet-red text-white"
                    />
                  </div>
                  <Button onClick={handleAddProject} className="w-full bg-soviet-green">
                    Добавить
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="bg-soviet-gray border-2 border-soviet-green p-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-soviet-green/20 p-3 rounded">
                    <Icon name="Construction" size={24} className="text-soviet-gold" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                    <p className="text-white/60 text-sm">{project.startDate}</p>
                  </div>
                </div>

                {isAdmin && (
                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setEditProject(project)}
                          className="text-soviet-gold hover:bg-soviet-gold/20"
                        >
                          <Icon name="Edit" size={16} />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-soviet-gray border-soviet-gold">
                        <DialogHeader>
                          <DialogTitle className="text-white">Редактировать проект</DialogTitle>
                        </DialogHeader>
                        {editProject && (
                          <div className="space-y-4">
                            <div>
                              <Label className="text-white">Название</Label>
                              <Input
                                value={editProject.name}
                                onChange={(e) => setEditProject({ ...editProject, name: e.target.value })}
                                className="bg-soviet-dark border-soviet-red text-white"
                              />
                            </div>
                            <div>
                              <Label className="text-white">Описание</Label>
                              <Textarea
                                value={editProject.description}
                                onChange={(e) => setEditProject({ ...editProject, description: e.target.value })}
                                className="bg-soviet-dark border-soviet-red text-white"
                              />
                            </div>
                            <div>
                              <Label className="text-white">Прогресс (%)</Label>
                              <Input
                                type="number"
                                min="0"
                                max="100"
                                value={editProject.progress}
                                onChange={(e) => setEditProject({ ...editProject, progress: parseInt(e.target.value) })}
                                className="bg-soviet-dark border-soviet-red text-white"
                              />
                            </div>
                            <Button onClick={handleUpdateProject} className="w-full bg-soviet-green">
                              Сохранить
                            </Button>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteProject(project.id)}
                      className="text-soviet-red hover:bg-soviet-red/20"
                    >
                      <Icon name="Trash2" size={16} />
                    </Button>
                  </div>
                )}
              </div>

              <p className="text-white/70 mb-4">{project.description}</p>

              <div className="space-y-2">
                <div className="flex justify-between text-sm text-white mb-2">
                  <span>Прогресс</span>
                  <span className="text-soviet-gold font-bold">{project.progress}%</span>
                </div>
                <div className="w-full bg-soviet-dark rounded-full h-3 overflow-hidden">
                  <div 
                    className="bg-soviet-green h-full transition-all duration-500"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-soviet-red/30 flex items-center justify-between text-sm">
                <span className="text-white/60">Статус</span>
                <span className="text-soviet-green font-bold">{project.status}</span>
              </div>
            </Card>
          ))}
        </div>

        {projects.length === 0 && (
          <Card className="bg-soviet-gray border-2 border-soviet-red p-12 text-center">
            <Icon name="Construction" size={64} className="text-white/30 mx-auto mb-4" />
            <p className="text-white/60 text-lg">Нет активных строительных проектов</p>
            {isAdmin && (
              <p className="text-white/40 text-sm mt-2">Добавьте первый проект через кнопку выше</p>
            )}
          </Card>
        )}
      </div>
    </Layout>
  );
};

export default Construction;
