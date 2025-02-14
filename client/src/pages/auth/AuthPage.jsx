import { useNavigate, useLocation } from 'react-router-dom';
import { Button, Heading } from '../../components';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import './authPage.css';

function AuthPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const isLoginPage = location.pathname === '/auth/login';
  const isRegisterPage = location.pathname === '/auth/register';

  if (isLoginPage) {
    return (
      <div className="auth-container">
        <main className="auth-content">
          <LoginForm />
          <Button onClick={() => navigate('/auth')}>Retour</Button>
        </main>
      </div>
    );
  }

  if (isRegisterPage) {
    return (
      <div className="auth-container">
        <main className="auth-content">
          <RegisterForm />
          <Button onClick={() => navigate('/auth')}>Retour</Button>
        </main>
      </div>
    );
  }

  return (
    <div className="auth-container">
      <main className="auth-content">
        <div className="auth-message">
          <Heading level={2}>Bienvenue sur FamiListe</Heading>
          <p>
            Simplifiez la gestion de vos courses en famille. Créez un compte ou connectez-vous pour
            commencer.
          </p>
        </div>

        <div className="auth-buttons">
          <Button onClick={() => navigate('/auth/login')}>SE CONNECTER</Button>
          <Button variant="secondary" onClick={() => navigate('/auth/register')}>
            CRÉER UN COMPTE
          </Button>
          <div className="divider">
            <span>ou</span>
          </div>
          <Button variant="outline" onClick={() => navigate('/onboarding')}>
            RETOUR
          </Button>
        </div>
      </main>
    </div>
  );
}

export default AuthPage;
