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
  return useContext(FormContext);
}
