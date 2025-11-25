export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  content: string;
  icon: string;
}

export interface DecreeItem {
  id: string;
  number: string;
  title: string;
  date: string;
  author: string;
  content: string;
  status: string;
}

export interface LubertsyPhoto {
  id: string;
  url: string;
  caption: string;
  date: string;
}

export interface LubertsyStatus {
  status: string;
  progress: number;
  startDate: string;
}

const STORAGE_KEYS = {
  NEWS: 'cccp_news',
  DECREES: 'cccp_decrees',
  LUBERTSY_PHOTOS: 'cccp_lubertsy_photos',
  LUBERTSY_STATUS: 'cccp_lubertsy_status',
  LUBERTSY_NEWS: 'cccp_lubertsy_news',
  METRO_INFO: 'cccp_metro_info',
};

const defaultNews: NewsItem[] = [
  {
    id: '1',
    title: 'Запуск официального портала государства',
    date: '10 ноября 2025',
    category: 'Технологии',
    content: 'Введён в эксплуатацию официальный веб-портал ЦК КПСС. Граждане могут ознакомиться со структурой власти и подать заявки на роли.',
    icon: 'Globe',
  },
  {
    id: '2',
    title: 'Утверждён государственный гимн ЦК КПСС',
    date: '15 ноября 2025',
    category: 'Культура',
    content: 'Высшее руководство утвердило текст государственного гимна. Гимн исполняется под мелодию СССР с адаптированными словами.',
    icon: 'Music',
  },
];

export const getNews = (): NewsItem[] => {
  const stored = localStorage.getItem(STORAGE_KEYS.NEWS);
  return stored ? JSON.parse(stored) : defaultNews;
};

export const saveNews = (news: NewsItem[]): void => {
  localStorage.setItem(STORAGE_KEYS.NEWS, JSON.stringify(news));
};

export const addNews = (news: Omit<NewsItem, 'id'>): void => {
  const allNews = getNews();
  const newItem = { ...news, id: Date.now().toString() };
  saveNews([newItem, ...allNews]);
};

export const deleteNews = (id: string): void => {
  const news = getNews().filter(item => item.id !== id);
  saveNews(news);
};

export const getDecrees = (): DecreeItem[] => {
  const stored = localStorage.getItem(STORAGE_KEYS.DECREES);
  return stored ? JSON.parse(stored) : [];
};

export const saveDecrees = (decrees: DecreeItem[]): void => {
  localStorage.setItem(STORAGE_KEYS.DECREES, JSON.stringify(decrees));
};

export const addDecree = (decree: Omit<DecreeItem, 'id'>): void => {
  const allDecrees = getDecrees();
  const newItem = { ...decree, id: Date.now().toString() };
  saveDecrees([newItem, ...allDecrees]);
};

export const deleteDecree = (id: string): void => {
  const decrees = getDecrees().filter(item => item.id !== id);
  saveDecrees(decrees);
};

export const getLubertsyPhotos = (): LubertsyPhoto[] => {
  const stored = localStorage.getItem(STORAGE_KEYS.LUBERTSY_PHOTOS);
  return stored ? JSON.parse(stored) : [];
};

export const saveLubertsyPhotos = (photos: LubertsyPhoto[]): void => {
  localStorage.setItem(STORAGE_KEYS.LUBERTSY_PHOTOS, JSON.stringify(photos));
};

export const addLubertsyPhoto = (photo: Omit<LubertsyPhoto, 'id'>): void => {
  const photos = getLubertsyPhotos();
  const newPhoto = { ...photo, id: Date.now().toString() };
  saveLubertsyPhotos([...photos, newPhoto]);
};

export const deleteLubertsyPhoto = (id: string): void => {
  const photos = getLubertsyPhotos().filter(p => p.id !== id);
  saveLubertsyPhotos(photos);
};

export const getLubertsyStatus = (): LubertsyStatus => {
  const stored = localStorage.getItem(STORAGE_KEYS.LUBERTSY_STATUS);
  return stored ? JSON.parse(stored) : {
    status: 'В стадии строительства',
    progress: 45,
    startDate: '15 октября 2025',
  };
};

export const saveLubertsyStatus = (status: LubertsyStatus): void => {
  localStorage.setItem(STORAGE_KEYS.LUBERTSY_STATUS, JSON.stringify(status));
};

export const getLubertsyNews = (): NewsItem[] => {
  const stored = localStorage.getItem(STORAGE_KEYS.LUBERTSY_NEWS);
  return stored ? JSON.parse(stored) : [];
};

export const saveLubertsyNews = (news: NewsItem[]): void => {
  localStorage.setItem(STORAGE_KEYS.LUBERTSY_NEWS, JSON.stringify(news));
};

export const addLubertsyNews = (news: Omit<NewsItem, 'id'>): void => {
  const allNews = getLubertsyNews();
  const newItem = { ...news, id: Date.now().toString() };
  saveLubertsyNews([newItem, ...allNews]);
};

export const deleteLubertsyNews = (id: string): void => {
  const news = getLubertsyNews().filter(item => item.id !== id);
  saveLubertsyNews(news);
};

export interface MetroInfo {
  stations: number;
  lines: number;
  status: string;
}

export const getMetroInfo = (): MetroInfo => {
  const stored = localStorage.getItem(STORAGE_KEYS.METRO_INFO);
  return stored ? JSON.parse(stored) : {
    stations: 0,
    lines: 0,
    status: 'Готово',
  };
};

export const saveMetroInfo = (info: MetroInfo): void => {
  localStorage.setItem(STORAGE_KEYS.METRO_INFO, JSON.stringify(info));
};

export const checkAdminAuth = (): boolean => {
  return localStorage.getItem('admin_authenticated') === 'true';
};