import { create } from 'zustand';

const TOKEN_KEY = 'ag_token';

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  login: (token: string, rememberMe: boolean) => void;
  logout: () => void;
}

function readToken(): string | null {
  return localStorage.getItem(TOKEN_KEY) ?? sessionStorage.getItem(TOKEN_KEY);
}

export const useAuthStore = create<AuthState>(() => ({
  token: readToken(),
  isAuthenticated: readToken() !== null,

  login: (token, rememberMe) => {
    if (rememberMe) {
      localStorage.setItem(TOKEN_KEY, token);
      sessionStorage.removeItem(TOKEN_KEY);
    } else {
      sessionStorage.setItem(TOKEN_KEY, token);
      localStorage.removeItem(TOKEN_KEY);
    }
    useAuthStore.setState({ token, isAuthenticated: true });
  },

  logout: () => {
    localStorage.removeItem(TOKEN_KEY);
    sessionStorage.removeItem(TOKEN_KEY);
    useAuthStore.setState({ token: null, isAuthenticated: false });
  },
}));
