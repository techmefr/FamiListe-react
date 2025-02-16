import { useShoppingList } from '../../contexts/ShoppingListContext';
import Heading from '../../components/typography/Heading';
import './listPage.css';

function ListPage() {
  const { stores, selectedStore, setSelectedStore, shelves, products } = useShoppingList();

  return (
    <div className="list-container">
      <Heading level={2}>Liste</Heading>

      <div className="select-container">
        <select value={selectedStore || ''} onChange={(e) => setSelectedStore(e.target.value)}>
          <option value="">Sélectionner un magasin</option>
          {stores.map((store) => (
            <option key={store.id} value={store.id}>
              {store.name}
            </option>
          ))}
        </select>
      </div>

      <div className="list-content">
        {shelves
          .filter((shelf) => products.some((product) => product.shelf_id === shelf.id))
          .sort((a, b) => a.order - b.order)
          .map((shelf) => (
            <details key={shelf.id} className="shelf">
              <summary>{shelf.name}</summary>
              <ul>
                {products
                  .filter((product) => product.shelf_id === shelf.id)
                  .sort((a, b) => a.order - b.order)
                  .map((product) => (
                    <li key={product.id} className="product-item">
                      <span>
                        {product.name} - {product.quantity} {product.unit}
                      </span>
                      <button>🗑️</button>
                    </li>
                  ))}
              </ul>
            </details>
          ))}
      </div>
    </div>
  );
}

export default ListPage;
