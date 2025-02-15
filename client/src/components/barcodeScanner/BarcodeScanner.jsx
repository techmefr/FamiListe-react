import { useEffect } from 'react';
import { BrowserQRCodeReader } from '@zxing/browser';
import PropTypes from 'prop-types';
import './barcodeScanner.css';

function BarcodeScanner({ onScan, onClose }) {
  useEffect(() => {
    const codeReader = new BrowserQRCodeReader();
    const videoElement = document.getElementById('barcode-scanner');

    async function startScanning() {
      try {
        const videoConstraints = {
          facingMode: 'environment',
        };

        await codeReader.decodeFromConstraints(
          { video: videoConstraints },
          videoElement,
          (result) => {
            if (result) {
              onScan(result.text);
            }
          }
        );
      } catch (error) {
        console.error('Erreur scanner:', error);
      }
    }

    startScanning();

    return () => {
      codeReader.reset();
    };
  }, [onScan]);

  return (
    <div className="barcode-scanner-container">
      <video id="barcode-scanner" className="barcode-video" />
      <button onClick={onClose} className="scanner-close-button">
        Saisie manuelle
      </button>
    </div>
  );
}

BarcodeScanner.propTypes = {
  onScan: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default BarcodeScanner;
