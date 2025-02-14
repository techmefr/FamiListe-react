import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Heading } from '../../../components';
import { useAuth } from '../../../hooks/useAuth';
import { Mail, Lock, ArrowLeft } from 'lucide-react';

function LoginForm() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, validateEmail, error, isLoading } = useAuth();

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    const isValid = await validateEmail(email);
    if (isValid) {
      setStep(2);
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    const result = await login(email, password);
    if (result?.user && result?.session) {
      // Petit délai pour s'assurer que la session est bien établie
      setTimeout(() => {
        navigate('/list');
      }, 100);
    }
  };

  if (step === 1) {
    return (
      <div className="auth-container">
        <div className="logo-container">FamiListe</div>
        <main className="auth-content">
          <div className="auth-message">
            <Heading level={1}>Connexion</Heading>
            <p>Entrez votre adresse email</p>
          </div>

          <form onSubmit={handleEmailSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <div className={`input-wrapper ${error?.field === 'email' ? 'error' : ''}`}>
                <Mail className="input-icon" size={20} />
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
                <ArrowLeft size={20} />
                Retour
              </Button>
              <Button variant="primary" type="submit" disabled={isLoading}>
                Continuer
              </Button>
            </div>
          </form>
        </main>
      </div>
    );
  }

  return (
    <div className="auth-container">
      <div className="logo-container">FamiListe</div>
      <main className="auth-content">
        <div className="auth-message">
          <Heading level={1}>Saisissez votre mot de passe</Heading>
          <p>Pour vous connecter à votre compte</p>
        </div>

        <form onSubmit={handlePasswordSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <div className={`input-wrapper ${error?.field === 'password' ? 'error' : ''}`}>
              <Lock className="input-icon" size={20} />
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                required
              />
            </div>
            {error?.field === 'password' && <p className="error-message">{error.message}</p>}
          </div>

          {error?.field === 'submit' && <p className="error-message">{error.message}</p>}

          <div className="form-actions">
            <Button variant="secondary" onClick={() => setStep(1)} type="button">
              <ArrowLeft size={20} />
              Retour
            </Button>
            <Button variant="primary" type="submit" disabled={isLoading}>
              {isLoading ? 'Connexion...' : 'Se connecter'}
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default LoginForm;
