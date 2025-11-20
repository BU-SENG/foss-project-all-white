import { create } from 'zustand';
import api from '../lib/api';

export const useAuthStore = create((set) => ({
  user: null,
  token: localStorage.getItem('campus_token'),
  loading: true,

  login: async (email, password) => {
    const res = await api.post('/auth/login', { email, password });
    localStorage.setItem('campus_token', res.data.token);
    set({ user: res.data.user, token: res.data.token });
    return res.data;
  },

  signup: async (name, email, password) => {
      const res = await api.post('/auth/register', { name, email, password });
      localStorage.setItem('campus_token', res.data.token);
      set({ user: res.data.user, token: res.data.token });
      return res.data;
    
  },

  loadUser: async () => {
    try {
      const token = localStorage.getItem('campus_token');
      if (token) {
        const res = await api.get('/auth/me');
        set({ user: res.data.user, loading: false });
      } else {
        set({ user: null, loading: false });
      }
    } catch (error) {
      localStorage.removeItem('campus_token');
      console.error(error);
      set({ user: null, loading: false });
    }
  },

  logout: () => {
    localStorage.removeItem('campus_token');
    set({ user: null, token: null });
  }
}));