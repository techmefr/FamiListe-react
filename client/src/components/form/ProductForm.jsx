import { useState } from 'react';
import PropTypes from 'prop-types';
import './form.css';

function ProductForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    quantity: '1',
    category: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Produit à ajouter:', formData);
    onClose();
  };

  return (
    <div className="form-overlay">
      <form onSubmit={handleSubmit} className="form-container">
        <h2>Ajouter un produit</h2>
        <div className="form-group">
          <label htmlFor="name">Nom du produit</label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="quantity">Quantité</label>
          <input
            id="quantity"
            type="number"
            min="1"
            value={formData.quantity}
            onChange={(e) => setFormData((prev) => ({ ...prev, quantity: e.target.value }))}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Catégorie</label>
          <select
            id="category"
            value={formData.category}
            onChange={(e) => setFormData((prev) => ({ ...prev, category: e.target.value }))}
            required
          >
            <option value="">Sélectionner une catégorie</option>
            <option value="fruits">Fruits & Légumes</option>
            <option value="dairy">Produits laitiers</option>
            <option value="meat">Viandes</option>
            <option value="other">Autre</option>
          </select>
        </div>

        <div className="form-actions">
          <button type="button" onClick={onClose}>
            Annuler
          </button>
          <button type="submit">Ajouter</button>
        </div>
      </form>
    </div>
  );
}

ProductForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ProductForm;
