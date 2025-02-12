import { Button } from '../../../components';

function OnboardingNav() {
  return (
    <nav className="onboarding-nav">
      <Button variant="primary">Se connecter</Button>
      <Button variant="secondary">Créer un compte</Button>
      <Button variant="secondary">Avancé</Button>
    </nav>
  );
}

export default OnboardingNav;
