// src/main.jsx
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
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
    <ThemeProvider>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/onboarding" />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/auth/login" element={<div>Login page coming soon</div>} />
          <Route path="/auth/register" element={<div>Register page coming soon</div>} />
          <Route path="/app" element={<App />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/zoom" element={<ZoomPage />} />
          <Route path="/cards" element={<CardsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </MainLayout>
    </ThemeProvider>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Router>
    <AppRoutes />
  </Router>
);
