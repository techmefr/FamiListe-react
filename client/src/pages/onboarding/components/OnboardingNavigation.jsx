import { useNavigate } from 'react-router-dom';
import { Button } from '../../../components';

function OnboardingNav() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate('/auth/login');
  }

  function handleRegister() {
    navigate('/auth/register');
  }

  function handleAdvanced() {
    navigate('/auth/advanced');
  }

  return (
    <nav className="onboarding-nav">
      <Button onClick={handleLogin} variant="primary">
        Se connecter
      </Button>
      <Button onClick={handleRegister} variant="secondary">
        Créer un compte
      </Button>
      <Button onClick={handleAdvanced} variant="secondary">
        Avancé
      </Button>
    </nav>
  );
}

export default OnboardingNav;
