import { useNavigate } from 'react-router-dom';
import { Button } from '../../components';
import Header from '../../components/header/Header';
import './authPage.css';

function AuthPage() {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <Header />

      <main className="auth-content">
        <div className="auth-message">
          <h2>Bienvenue sur FamiListe</h2>
          <p>
            Simplifiez la gestion de vos courses en famille. Créez un compte ou connectez-vous pour
            commencer.
          </p>
        </div>

        <div className="auth-buttons">
          <Button variant="primary" onClick={() => navigate('/auth/login')}>
            SE CONNECTER
          </Button>
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
