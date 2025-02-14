import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Heading } from '../../../components';
import { useAuth } from '../../../hooks/useAuth';
import PasswordStrengthIndicator from '../../../components/form/PasswordStrengthIndicator';
import { Mail, Lock } from 'lucide-react';
import '../authPage.css';

function RegisterForm() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { register, validateEmail, validatePassword, error, isLoading, setError } = useAuth();

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    const isValid = await validateEmail(email);
    if (isValid) {
      setStep(2);
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError({ field: 'confirmPassword', message: 'Les mots de passe ne correspondent pas' });
      return;
    }

    const isValid = await validatePassword(password);
    if (isValid) {
      const user = await register(email, password);
      if (user) {
        navigate('/onboarding');
      }
    }
  };

  if (step === 1) {
    return (
      <div className="auth-content">
        <div className="auth-message">
          <Heading level={1}>Créer un compte</Heading>
          <p>Commencez avec votre adresse email</p>
        </div>

        <form onSubmit={handleEmailSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <div className={`input-wrapper ${error?.field === 'email' ? 'error' : ''}`}>
              <Mail className="input-icon" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="exemple@email.com"
                disabled={isLoading}
                required
              />
            </div>
            {error?.field === 'email' && <p className="error-message">{error.message}</p>}
          </div>

          <div className="form-actions">
            <Button variant="secondary" onClick={() => navigate('/auth')} type="button">
              ← RETOUR
            </Button>
            <Button variant="primary" type="submit" disabled={isLoading}>
              CONTINUER
            </Button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="auth-content">
      <div className="auth-message">
        <Heading level={1}>Choisissez un mot de passe</Heading>
        <p>Créez un mot de passe sécurisé</p>
      </div>

      <form onSubmit={handlePasswordSubmit} className="auth-form">
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <div className={`input-wrapper ${error?.field === 'password' ? 'error' : ''}`}>
            <Lock className="input-icon" />
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              required
            />
          </div>
          <PasswordStrengthIndicator password={password} />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmez le mot de passe</label>
          <div className={`input-wrapper ${error?.field === 'confirmPassword' ? 'error' : ''}`}>
            <Lock className="input-icon" />
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              disabled={isLoading}
              required
            />
          </div>
          {error?.field === 'confirmPassword' && <p className="error-message">{error.message}</p>}
        </div>

        {error?.field === 'submit' && <p className="error-message">{error.message}</p>}

        <div className="form-actions">
          <Button variant="secondary" onClick={() => setStep(1)} type="button">
            ← RETOUR
          </Button>
          <Button variant="primary" type="submit" disabled={isLoading}>
            {isLoading ? 'CRÉATION...' : 'CRÉER MON COMPTE'}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
