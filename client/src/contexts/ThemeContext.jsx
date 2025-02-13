import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext(null);

function getInitialTheme() {
  const savedTheme = localStorage.getItem('familiste-theme');
  return savedTheme || 'light';
}

function getInitialFontSize() {
  const savedFontSize = localStorage.getItem('familiste-fontSize');
  return savedFontSize ? parseInt(savedFontSize) : 14;
}

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);
  const [fontSize, setFontSize] = useState(getInitialFontSize);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('familiste-theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('familiste-fontSize', fontSize.toString());
  }, [fontSize]);

  function toggleTheme() {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }

  function updateFontSize(size) {
    setFontSize(size);
  }

  const value = {
    theme,
    toggleTheme,
    fontSize,
    updateFontSize,
  };

  return (
    <ThemeContext.Provider value={value}>
      <div data-theme={theme} style={{ fontSize: `${fontSize}px` }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export { ThemeProvider, useTheme };
