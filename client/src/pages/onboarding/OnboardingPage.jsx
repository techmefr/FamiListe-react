import PropTypes from 'prop-types';
import { Button } from '../../components/index';
import './onboarding.css';
import FeatureSlider from './components/FeatureSlider';
import OnboardingNav from './components/OnboardingNav';

function OnboardingPage() {
  return (
    <div className="onboarding-container">
      <header className="onboarding-header">
        <h1>FamiListe</h1>
      </header>

      <main className="onboarding-content">
        <FeatureSlider />
        <OnboardingNav />
      </main>
    </div>
  );
}

export default OnboardingPage;
