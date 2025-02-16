import { useLocation } from 'react-router-dom';
import CardForm from './CardForm';
import ProductForm from './ProductForm';
import { useForm } from '../../contexts/FormContext';

function AddForm() {
  const location = useLocation();
  const { showForm, setShowForm } = useForm();

  console.log('showForm:', showForm);

  if (!showForm) return null;

  const handleClose = () => {
    setShowForm(false);
  };

  return (
    <div className={`form-overlay ${showForm ? 'open' : ''}`} onClick={handleClose}>
      <div className="form-container" onClick={(e) => e.stopPropagation()}>
        {location.pathname === '/cards' ? (
          <CardForm onClose={handleClose} />
        ) : location.pathname === '/list' ? (
          <ProductForm onClose={handleClose} />
        ) : null}
      </div>
    </div>
  );
}

export default AddForm;
