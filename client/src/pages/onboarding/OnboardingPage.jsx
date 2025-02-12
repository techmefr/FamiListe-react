import { useState } from 'react';
import { Button, Heading } from '../../components';
import { useTheme } from '../../contexts/ThemeContext';
import FeatureSlider from './components/FeatureSlider';
import OnboardingNav from './components/OnboardingNav';
import './onboarding.css';

function OnboardingPage() {
  const { theme, toggleTheme, fontSize, updateFontSize } = useTheme();
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="onboarding-container">
      <header className="onboarding-header">
        <Heading level={1}>FamiListe</Heading>
      </header>

      <main className="onboarding-content">
        <FeatureSlider />
        <div className="onboarding-settings">
          <Button variant="secondary" onClick={() => setShowSettings(!showSettings)}>
            Personnalisation
          </Button>
          {showSettings && (
            <div className="settings-panel">
              <div className="font-settings">
                <Heading level={3}>Taille du texte</Heading>
                <div className="font-buttons">
                  {[12, 14, 16, 18, 20].map((size) => (
                    <button
                      key={size}
                      onClick={() => updateFontSize(size)}
                      className={`font-button ${fontSize === size ? 'active' : ''}`}
                    >
                      A
                    </button>
                  ))}
                </div>
              </div>
              <div className="theme-settings">
                <Heading level={3}>Thème</Heading>
                <button onClick={toggleTheme} className="theme-toggle">
                  {theme === 'light' ? '🌙' : '☀️'}
                </button>
              </div>
            </div>
          )}
        </div>
        <OnboardingNav />
      </main>
    </div>
  );
}

export default OnboardingPage;
