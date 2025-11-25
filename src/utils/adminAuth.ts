const ADMIN_PASSWORD = 'cccp2025';
const AUTH_KEY = 'admin_authenticated';

export const checkAdminAuth = (): boolean => {
  return localStorage.getItem(AUTH_KEY) === 'true';
};

export const loginAdmin = (password: string): boolean => {
  if (password === ADMIN_PASSWORD) {
    localStorage.setItem(AUTH_KEY, 'true');
    return true;
  }
  return false;
};

export const logoutAdmin = (): void => {
  localStorage.removeItem(AUTH_KEY);
};
