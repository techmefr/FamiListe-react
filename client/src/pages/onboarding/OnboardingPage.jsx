import { useNavigate } from 'react-router-dom';
import { Heading, Button } from '../../components/index';
import { useTheme } from '../../contexts/ThemeContext';
import FeatureSlider from './components/FeatureSlider';
import FontSizePicker from '../../components/fontSizerPicker/FontSizePicker';
import ThemeSwitch from '../../components/themeSwitch/ThemeSwitch';
import './onboarding.css';
import '../auth/authPage.css';

function OnboardingPage() {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  return (
    <div className="onboarding-container">
      <main className="onboarding-content">
        <FeatureSlider />
        <div className="onboarding-settings">
          <div className="settings-description">
            <Heading level={2}>Personnalisez votre expérience</Heading>
            <p>
              Pour commencer, choisissez une taille de texte confortable et un thème qui vous
              convient. Ces réglages peuvent être modifiés à tout moment.
            </p>
            <div className="settings-controls">
              <FontSizePicker />
              <ThemeSwitch theme={theme} toggleTheme={toggleTheme} />
            </div>
          </div>
        </div>
        <Button variant="primary" className="continue-button" onClick={() => navigate('/auth')}>
          Continuer
          <span className="continue-arrow">→</span>
        </Button>
      </main>
    </div>
  );
}

export default OnboardingPage;
