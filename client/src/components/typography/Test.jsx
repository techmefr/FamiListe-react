function Text({ children, variant = 'body', className = '' }) {
  return <p className={`text ${variant} ${className}`}>{children}</p>;
}

export default Text;
