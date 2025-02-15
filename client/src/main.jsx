import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { FormProvider } from './contexts/FormContext';
import { CardProvider } from './contexts/CardContext';
import ProtectedRoute from './components/ProtectedRoute';
import MainLayout from './layouts/MainLayout';
import OnboardingPage from './pages/onboarding/OnboardingPage';
import AuthPage from './pages/auth/AuthPage';
import ListPage from './pages/listPage/ListPage';
import ZoomPage from './pages/zoomPage/ZoomPage';
import CardsPage from './pages/cardsPage/CardsPage';
import SettingsPage from './pages/SettingsPage/SettingsPage';
import App from './App';
import './styles/global.css';

function AppRoutes() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <FormProvider>
          <CardProvider>
            <MainLayout>
              <Routes>
                {/* Routes publiques */}
                <Route path="/" element={<Navigate to="/onboarding" />} />
                <Route path="/onboarding" element={<OnboardingPage />} />
                <Route path="/auth/*" element={<AuthPage />} />

                {/* Routes protégées */}
                <Route
                  path="/app"
                  element={
                    <ProtectedRoute>
                      <App />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/list"
                  element={
                    <ProtectedRoute>
                      <ListPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/zoom"
                  element={
                    <ProtectedRoute>
                      <ZoomPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/cards"
                  element={
                    <ProtectedRoute>
                      <CardsPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/settings"
                  element={
                    <ProtectedRoute>
                      <SettingsPage />
                    </ProtectedRoute>
                  }
                />

                {/* Redirection fallback */}
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </MainLayout>
          </CardProvider>
        </FormProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Router>
    <AppRoutes />
  </Router>
);
