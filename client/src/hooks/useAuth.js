import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { authSchemas } from '../schemas/auth';

export function useAuth() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [step, setStep] = useState(1);

  const validateEmail = async (email) => {
    try {
      await authSchemas.email.parseAsync(email);
      return true;
    } catch (err) {
      setError(err.errors[0]);
      return false;
    }
  };

  const validatePassword = async (password) => {
    try {
      await authSchemas.password.parseAsync(password);
      return true;
    } catch (err) {
      setError(err.errors[0]);
      return false;
    }
  };

  const login = async ({ email, password }) => {
    try {
      setIsLoading(true);
      setError(null);

      const { data, error: supabaseError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (supabaseError) throw supabaseError;

      return data;
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    step,
    setStep,
    validateEmail,
    validatePassword,
    login,
  };
}
