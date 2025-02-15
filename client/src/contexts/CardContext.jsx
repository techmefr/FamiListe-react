import { createContext, useContext, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { fidelityCardService } from '../services/fidelityCardService';

const CardContext = createContext();

export function CardProvider({ children }) {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadCards = useCallback(async () => {
    try {
      const loadedCards = await fidelityCardService.getCards();
      setCards(loadedCards);
    } catch (error) {
      console.error('Erreur lors du chargement des cartes:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <CardContext.Provider value={{ cards, loading, loadCards }}>{children}</CardContext.Provider>
  );
}

CardProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useCards() {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error('useCards must be used within a CardProvider');
  }
  return context;
}
