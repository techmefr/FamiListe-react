import { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import localforage from 'localforage';
import tutorialData from '../data/tutorial.json';
import PropTypes from 'prop-types';

const ShoppingListContext = createContext();

export const ShoppingListProvider = ({ children }) => {
  const [stores, setStores] = useState([]);
  const [shelves, setShelves] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedStore, setSelectedStore] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadShoppingList();
  }, []);

  const loadShoppingList = async () => {
    setLoading(true);
    try {
      const { data: storesData } = await supabase.from('stores').select('*');
      const { data: shelvesData } = await supabase.from('shelves').select('*');
      const { data: productsData } = await supabase.from('products').select('*');

      if (!storesData || !shelvesData || !productsData) throw new Error('Supabase fetch error');

      setStores(storesData);
      setShelves(shelvesData);
      setProducts(productsData);

      await localforage.setItem('stores', storesData);
      await localforage.setItem('shelves', shelvesData);
      await localforage.setItem('products', productsData);
      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      console.warn('⚠️ Supabase échec, passage au stockage local');
      loadFromLocalForage();
    } finally {
      setLoading(false);
    }
  };

  const loadFromLocalForage = async () => {
    try {
      const localStores = await localforage.getItem('stores');
      const localShelves = await localforage.getItem('shelves');
      const localProducts = await localforage.getItem('products');

      if (localStores && localShelves && localProducts) {
        setStores(localStores);
        setShelves(localShelves);
        setProducts(localProducts);
      } else {
        console.warn('⚠️ Aucun cache trouvé, passage au mode tutoriel');
        loadTutorialData();
      }
    } catch {
      loadTutorialData();
    }
  };

  const loadTutorialData = () => {
    setStores(tutorialData.stores);
    setShelves(tutorialData.shelves);
    setProducts(tutorialData.products);
  };

  return (
    <ShoppingListContext.Provider
      value={{ stores, shelves, products, selectedStore, setSelectedStore, loading }}
    >
      {children}
    </ShoppingListContext.Provider>
  );
};

export const useShoppingList = () => useContext(ShoppingListContext);

ShoppingListProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
