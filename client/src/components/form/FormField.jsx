import PropTypes from 'prop-types';

function FormField({ label, error, children, required }) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block font-medium">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      {children}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}

FormField.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  children: PropTypes.node.isRequired,
  required: PropTypes.bool,
};

FormField.defaultProps = {
  required: false,
};

export default FormField;
