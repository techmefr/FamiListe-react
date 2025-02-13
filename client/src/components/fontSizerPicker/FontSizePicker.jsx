import { useState, useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import './fontSizerPicker.css';

const fontSizeOptions = [
  { value: 12, label: 'Très petite' },
  { value: 14, label: 'Petite' },
  { value: 16, label: 'Moyenne' },
  { value: 18, label: 'Grande' },
  { value: 20, label: 'Très grande' },
];

function FontSizePicker() {
  const { fontSize, updateFontSize } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const handleOptionSelect = (size) => {
    updateFontSize(Number(size));
    setIsOpen(false);
  };

  return (
    <div className="font-size-container">
      <span className="font-size-header">Taille des polices</span>
      <div className="font-size-controls">
        <button
          className="font-size-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          aA
        </button>

        <input
          type="range"
          min="12"
          max="20"
          value={fontSize}
          onChange={(e) => updateFontSize(Number(e.target.value))}
          className="font-size-slider"
          aria-label="Ajuster la taille du texte"
        />

        {isOpen && (
          <>
            <div className="font-size-overlay" onClick={() => setIsOpen(false)} />
            <div className="font-size-popup" role="dialog" aria-label="Choisir la taille du texte">
              {fontSizeOptions.map(({ value, label }) => (
                <div
                  key={value}
                  className="font-size-option"
                  style={{ fontSize: `${value}px` }}
                  onClick={() => handleOptionSelect(value)}
                >
                  <input
                    type="radio"
                    id={`size-${value}`}
                    name="fontSize"
                    value={value}
                    checked={fontSize === value}
                    onChange={(e) => handleOptionSelect(Number(e.target.value))}
                  />
                  <label htmlFor={`size-${value}`}>{label}</label>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default FontSizePicker;
