import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { BrowserMultiFormatReader } from '@zxing/library';
import { fidelityCardService } from '../../services/fidelityCardService';
import { useCards } from '../../contexts/CardContext';
import './form.css';

function CardForm({ onClose }) {
  const { loadCards } = useCards();
  const [formData, setFormData] = useState({
    name: '',
    barcode: '',
  });
  const [showScanner, setShowScanner] = useState(true);

  useEffect(() => {
    let codeReader = null;

    if (showScanner) {
      codeReader = new BrowserMultiFormatReader();

      const startScanner = async () => {
        try {
          await codeReader.decodeFromVideoDevice(undefined, 'video', (result) => {
            if (result) {
              setFormData((prev) => ({ ...prev, barcode: result.getText() }));
              setShowScanner(false);
            }
          });
        } catch (err) {
          console.error("Erreur lors de l'initialisation du scanner:", err);
          setShowScanner(false);
        }
      };

      startScanner();
    }

    return () => {
      if (codeReader) {
        codeReader.reset();
      }
    };
  }, [showScanner]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fidelityCardService.addCard(formData);
      await loadCards();
      onClose();
    } catch (error) {
      console.error("Erreur lors de l'ajout de la carte:", error);
    }
  };

  return (
    <div className="form-overlay">
      <div className="form-container">
        <h2>Ajouter une carte de fidélité</h2>

        {showScanner ? (
          <div className="camera-container">
            <video id="video" className="camera-preview" />
            <button
              type="button"
              className="manual-entry-button"
              onClick={() => setShowScanner(false)}
            >
              Saisie manuelle
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nom du magasin</label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                placeholder="Ex: Carrefour"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="barcode">Code-barres</label>
              <div className="barcode-input-group">
                <input
                  id="barcode"
                  type="text"
                  value={formData.barcode}
                  onChange={(e) => setFormData((prev) => ({ ...prev, barcode: e.target.value }))}
                  placeholder="Ex: 123456789"
                  required
                />
                <button type="button" onClick={() => setShowScanner(true)} className="scan-button">
                  Scanner
                </button>
              </div>
            </div>

            <div className="form-actions">
              <button type="button" onClick={onClose} className="cancel-button">
                Annuler
              </button>
              <button type="submit" className="submit-button">
                Ajouter
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

CardForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default CardForm;
