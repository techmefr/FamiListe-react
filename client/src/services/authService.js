import { supabase } from '../lib/supabase';

const TOKEN_KEY = import.meta.env.VITE_TOKEN_KEY || 'familiste_token';
const USER_KEY = import.meta.env.VITE_USER_KEY || 'familiste_user';

export const authService = {
  setSession(session) {
    if (session) {
      localStorage.setItem(TOKEN_KEY, session.access_token);
      localStorage.setItem(USER_KEY, JSON.stringify(session.user));
      supabase.auth.setSession(session);
    } else {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
    }
  },

  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  },

  getUser() {
    const user = localStorage.getItem(USER_KEY);
    return user ? JSON.parse(user) : null;
  },

  isAuthenticated() {
    return !!this.getToken();
  },

  async logout() {
    try {
      await supabase.auth.signOut();
      this.setSession(null);
      return true;
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
      return false;
    }
  },
};
