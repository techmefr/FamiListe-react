import Heading from '../../components/typography/Heading';
import Button from '../../components/button/Button';
import FontSizePicker from '../../components/fontSizerPicker/FontSizePicker';
import ThemeSwitch from '../../components/themeSwitch/ThemeSwitch';
import { RefreshCw, LogOut } from 'lucide-react';
import './settingsPage.css';

function Separator() {
  return <div className="separator" />;
}

function SettingsPage() {
  function handleSync() {
    // À implémenter
  }

  function handleLogout() {
    // À implémenter
  }

  function renderAccountSection() {
    return (
      <section className="settings-section">
        <Separator />

        <Heading level={3}>Compte</Heading>
        <div className="account-info">email@example.com</div>
        <div className="settings-buttons">
          <Button onClick={handleSync} variant="secondary">
            <RefreshCw size={18} />
            <span>Synchroniser</span>
          </Button>
          <Button onClick={handleLogout} variant="secondary">
            <LogOut size={18} />
            <span>Déconnexion</span>
          </Button>
        </div>
      </section>
    );
  }

  function renderDisplaySection() {
    return (
      <>
        <div className="display-item">
          <Heading level={3}>Gestion de la taille des polices</Heading>
          <FontSizePicker />
        </div>
        <Separator />
        <div className="display-item">
          <Heading level={3}>Thème</Heading>
          <ThemeSwitch />
        </div>
      </>
    );
  }

  return (
    <div className="settings-container">
      <Heading level={2}>Options</Heading>
      <div className="settings-content">
        {renderAccountSection()}
        <Separator />
        {renderDisplaySection()}
      </div>
    </div>
  );
}

export default SettingsPage;
