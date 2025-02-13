import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Header, Navbar } from '../components';

function MainLayout({ children }) {
  const location = useLocation();
  const pathname = location.pathname;

  const noNavbarRoutes = ['/onboarding', '/auth', '/auth/login', '/auth/register'];

  const shouldShowNavbar = !noNavbarRoutes.some((route) => pathname.startsWith(route));

  return (
    <div className="app">
      <Header />
      <main>{children}</main>
      {shouldShowNavbar && <Navbar />}
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
