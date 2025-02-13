import PropTypes from 'prop-types';
import { Heading } from '../index';
import Logo from '../../components/ui/logo/Logo';
import './header.css';

function Header({ level = 1 }) {
  return (
    <header className="app-header">
      <div className="header-content">
        <Logo width="64" height="64" />
        <Heading level={level}>FamiListe</Heading>
      </div>
    </header>
  );
}

Header.propTypes = {
  level: PropTypes.number,
};

Header.defaultProps = {
  level: 1,
};

export default Header;
