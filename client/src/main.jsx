import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/global.css';

function initializeApp() {
  const container = document.getElementById('root');
  const root = createRoot(container);
  return root;
}

function renderApp(root) {
  root.render(<App />);
}

const root = initializeApp();
renderApp(root);
