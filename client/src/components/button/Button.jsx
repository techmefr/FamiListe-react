function Button({ children, onClick, variant = 'primary', type = 'button', disabled = false }) {
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`button ${variant}`}>
      {children}
    </button>
  );
}

export default Button;
