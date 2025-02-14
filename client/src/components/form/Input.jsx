import PropTypes from 'prop-types';
import './form.css';

export function Input({ type = 'text', error, ...props }) {
  return (
    <input type={type} className={`form-input ${error ? 'form-input-error' : ''}`} {...props} />
  );
}

Input.propTypes = {
  type: PropTypes.string,
  error: PropTypes.string,
};
