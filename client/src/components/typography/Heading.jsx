function Heading({ children, level = 1, className = '' }) {
  const Tag = `h${level}`;

  return <Tag className={`heading heading-${level} ${className}`}>{children}</Tag>;
}

export default Heading;
