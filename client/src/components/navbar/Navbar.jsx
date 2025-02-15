// src/components//Navbar.jsx
import { useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Glasses, Search, Plus, CreditCard, Settings, ArrowLeft } from 'lucide-react';
import { useForm } from '../../contexts/FormContext';
import './navbar.css';

function NavButton({ Icon, label, action, isActive }) {
  const isAdd = label === 'Ajouter';

  return (
    <button onClick={action} className={`nav-button ${isAdd ? 'nav-button-add' : ''}`}>
      <div
        className={`nav-icon-container ${
          isActive ? 'nav-icon-active' : ''
        } ${isAdd ? 'nav-icon-add' : ''}`}
      >
        <Icon className={isAdd ? 'icon-large' : 'icon-normal'} />
      </div>
      <span className={`nav-label ${isActive ? 'nav-label-active' : ''}`}>{label}</span>
    </button>
  );
}

NavButton.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
};

NavButton.defaultProps = {
  isActive: false,
};

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { setShowForm } = useForm();
  const currentPath = location.pathname.split('/')[1] || 'list';

  function isPage(page) {
    return currentPath === page;
  }

  const handleAdd = () => {
    if (currentPath === 'cards') {
      setShowForm(true);
    } else if (currentPath === 'list') {
      // Logique pour ajouter à la liste
      console.log('Ajouter à la liste');
    }
  };

  const navItems = [
    {
      Icon: isPage('zoom') ? ArrowLeft : Glasses,
      label: isPage('zoom') ? 'Liste' : 'Lecture',
      action: () => navigate(isPage('zoom') ? '/list' : '/zoom'),
      isActive: isPage('zoom'),
    },
    {
      Icon: Search,
      label: 'Rechercher',
      action: () => navigate('/list'),
      isActive: isPage('list'),
    },
    {
      Icon: Plus,
      label: 'Ajouter',
      action: handleAdd,
      isActive: false,
    },
    {
      Icon: isPage('cards') ? ArrowLeft : CreditCard,
      label: isPage('cards') ? 'Liste' : 'Carte',
      action: () => navigate(isPage('cards') ? '/list' : '/cards'),
      isActive: isPage('cards'),
    },
    {
      Icon: isPage('settings') ? ArrowLeft : Settings,
      label: isPage('settings') ? 'Liste' : 'Options',
      action: () => navigate(isPage('settings') ? '/list' : '/settings'),
      isActive: isPage('settings'),
    },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          {navItems.map((item, index) => (
            <NavButton key={index} {...item} />
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
