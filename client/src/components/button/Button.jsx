// Button.jsx
import PropTypes from 'prop-types';
import './button.css';

function Button({ children, onClick, variant, type, disabled }) {
  const handleClick = (e) => {
    console.log('Button clicked');
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button type={type} onClick={handleClick} disabled={disabled} className={`button ${variant}`}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  variant: 'primary',
  type: 'button',
  disabled: false,
  onClick: () => {},
};

export default Button;
