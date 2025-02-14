import { LogOut, RefreshCw } from 'lucide-react';
import Button from '../button/Button';
import { useAuth } from '../../hooks/useAuth';
import './accountControls.css';

function AccountControls() {
  const { user, logout } = useAuth();

  const handleSync = async () => {
    console.log('Sync clicked');
  };

  const handleLogout = async () => {
    try {
      const success = await logout();

      if (success) {
        localStorage.clear();
        window.location.replace('/auth/login');
      }
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="account-controls">
      <div className="account-info">
        <span className="account-email">{user?.email || 'email@example.com'}</span>
      </div>

      <div className="account-actions">
        <Button onClick={handleSync} variant="secondary" type="button">
          <div className="button-content">
            <RefreshCw size={20} />
            <span>Synchroniser</span>
          </div>
        </Button>

        <Button onClick={handleLogout} variant="secondary" type="button">
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
