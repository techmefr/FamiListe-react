import { LogOut, RefreshCw } from 'lucide-react';
import Button from '../button/Button';
import './accountControls.css';

function AccountControls() {
  function handleSync() {
    // À implémenter
  }

  function handleLogout() {
    // À implémenter
  }

  return (
    <div className="account-controls">
      <div className="account-info">
        <span className="account-email">email@example.com</span>
      </div>
      <div className="account-actions">
        <Button onClick={handleSync} variant="secondary">
          <div className="button-content">
            <RefreshCw size={20} />
            <span>Synchroniser</span>
          </div>
        </Button>
        <Button onClick={handleLogout} variant="secondary">
          <div className="button-content">
            <LogOut size={20} />
            <span>Déconnexion</span>
          </div>
        </Button>
      </div>
    </div>
  );
}

export default AccountControls;
