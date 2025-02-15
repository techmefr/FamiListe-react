// src/contexts/FormContext.jsx
import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const FormContext = createContext();

export function FormProvider({ children }) {
  const [showForm, setShowForm] = useState(false);

  return <FormContext.Provider value={{ showForm, setShowForm }}>{children}</FormContext.Provider>;
}

FormProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useForm() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
}
