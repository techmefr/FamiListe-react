import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { authSchemas } from '../schemas/auth';

export function useAuth() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const clearError = () => setError(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const validateEmail = async (email) => {
    try {
      await authSchemas.email.parseAsync(email);
      return true;
    } catch (error) {
      setError({ field: 'email', message: error.errors[0].message });
      return false;
    }
  };

  const validatePassword = async (password) => {
    try {
      await authSchemas.password.parseAsync(password);
      return true;
    } catch (error) {
      setError({ field: 'password', message: error.errors[0].message });
      return false;
    }
  };

  const login = async (email, password) => {
    try {
      setIsLoading(true);
      setError(null);

      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) {
        switch (authError.message) {
          case 'Invalid login credentials':
            throw new Error('Email ou mot de passe incorrect');
          case 'Email not confirmed':
            throw new Error('Veuillez confirmer votre email');
          default:
            throw new Error(authError.message);
        }
      }

      if (!data?.session) {
        throw new Error('Session invalide');
      }

      // Mise à jour de la session
      await supabase.auth.setSession(data.session);
      setUser(data.user);

      return {
        user: data.user,
        session: data.session,
      };
    } catch (error) {
      setError({ field: 'submit', message: error.message });
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (email, password) => {
    try {
      setIsLoading(true);
      setError(null);

      const { data, error: authError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (authError) throw authError;

      return data;
    } catch (error) {
      setError({ field: 'submit', message: error.message });
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      console.log('Début de la déconnexion dans useAuth');
      setIsLoading(true);
      setError(null);

      const { error: authError } = await supabase.auth.signOut();
      console.log('Résultat de signOut:', authError);

      if (authError) throw authError;

      setUser(null);

      localStorage.clear();

      console.log('Déconnexion réussie');
      return true;
    } catch (error) {
      console.error('Erreur de déconnexion:', error);
      setError({ field: 'submit', message: error.message });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    user,
    isLoading,
    error,
    isAuthenticated: !!user,
    validateEmail,
    validatePassword,
    login,
    register,
    logout,
    setError,
    clearError,
  };
}
