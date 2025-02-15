import { useState, useEffect } from 'react';
import { CreditCard, Trash2 } from 'lucide-react';
import Heading from '../../components/typography/Heading';
import { fidelityCardService } from '../../services/fidelityCardService';
import CardDetail from '../../components/card/CardDetails/CardDetails';
import './cardsPage.css';

function CardsPage() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    loadCards();
  }, []);

  async function loadCards() {
    try {
      const loadedCards = await fidelityCardService.getCards();
      setCards(loadedCards);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  const handleDelete = async (cardId) => {
    try {
      await fidelityCardService.deleteCard(cardId);
      loadCards();
    } catch (error) {
      console.error('Erreur lors de la suppression de la carte:', error);
    }
  };

  if (loading) return <div className="cards-page">Chargement...</div>;
  if (error) return <div className="cards-page text-error">{error}</div>;

  return (
    <div className="cards-page">
      <Heading level={2}>Cartes de fidélité</Heading>
      {cards.length === 0 ? (
        <div className="empty-state">
          Aucune carte de fidélité. Utilisez le bouton + pour en ajouter.
        </div>
      ) : (
        <div className="cards-grid">
          {cards.map((card) => (
            <div key={card.id} className="card-item" onClick={() => setSelectedCard(card)}>
              <div className="card-content">
                <CreditCard className="card-icon" />
                <span className="card-name">{card.name}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(card.id);
                  }}
                  className="delete-button"
                >
                  <Trash2 className="trash-icon" />
                </button>
              </div>
              <div className="card-barcode">{card.barcode}</div>
            </div>
          ))}
        </div>
      )}
      {selectedCard && <CardDetail card={selectedCard} onClose={() => setSelectedCard(null)} />}
    </div>
  );
}

export default CardsPage;
