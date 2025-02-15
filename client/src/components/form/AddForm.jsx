import { useLocation } from 'react-router-dom';
import CardForm from './CardForm';
import ProductForm from './ProductForm';
import { useForm } from '../../contexts/FormContext';

function AddForm() {
  const location = useLocation();
  const { showForm, setShowForm } = useForm();

  if (!showForm) return null;

  const handleClose = () => {
    setShowForm(false);
  };

  if (location.pathname === '/cards') {
    return <CardForm onClose={handleClose} />;
  }

  if (location.pathname === '/list') {
    return <ProductForm onClose={handleClose} />;
  }

  return null;
}

export default AddForm;
