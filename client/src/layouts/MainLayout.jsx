import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Header, Navbar } from '../components';
import AddForm from '../components/form/AddForm';
import { FormProvider } from '../contexts/FormContext';

function MainLayout({ children }) {
  const location = useLocation();
  const pathname = location.pathname;

  const noNavbarRoutes = ['/onboarding', '/auth', '/auth/login', '/auth/register'];

  const shouldShowNavbar = !noNavbarRoutes.some((route) => pathname.startsWith(route));

  return (
    <FormProvider>
      <div className="app">
        <Header />
        <main>{children}</main>
        {shouldShowNavbar && <Navbar />}
        <AddForm /> {/* Ajoutez ceci */}
      </div>
    </FormProvider>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
