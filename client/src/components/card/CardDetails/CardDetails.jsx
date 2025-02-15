import PropTypes from 'prop-types';
import './CardDetail.css';

function CardDetail({ card, onClose }) {
  if (!card) return null;

  return (
    <div className="card-detail-overlay">
      <div className="card-detail-container">
        <h3> {card.name}</h3>
        <div className="barcode-container">
          <img
            src={`https://barcode.tec-it.com/barcode.ashx?data=${card.barcode}&code=Code128&dpi=200`}
            alt={`Code-barres de ${card.name}`}
            className="barcode-image"
          />
        </div>
        <p className="barcode-number">{card.barcode}</p>
        <button className="close-button" onClick={onClose}>
          Fermer
        </button>
      </div>
    </div>
  );
}

CardDetail.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string.isRequired,
    barcode: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CardDetail;
