import { Heading } from '../../components';
import { useTheme } from '../../contexts/ThemeContext';
import FeatureSlider from './components/FeatureSlider';
import OnboardingNav from '../../pages/onboarding/components/OnboardingNavigation';
import FontSizePicker from '../../components/fontSizerPicker/FontSizePicker';
import ThemeSwitch from '../../components/themeSwitch/ThemeSwitch';
import './onboarding.css';

function OnboardingPage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="onboarding-container">
      <header className="onboarding-header">
        <Heading level={1}>FamiListe</Heading>
      </header>

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
        <OnboardingNav />
      </main>
    </div>
  );
}

export default OnboardingPage;
