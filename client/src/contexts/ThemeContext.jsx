import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext(null);

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [fontSize, setFontSize] = useState(14);

  function toggleTheme() {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }

  function updateFontSize(size) {
    setFontSize(size);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, fontSize, updateFontSize }}>
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
