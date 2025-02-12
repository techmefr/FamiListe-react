import PropTypes from 'prop-types';

function Heading({ children, level, className }) {
  const Tag = `h${level}`;

  return <Tag className={`heading heading-${level} ${className}`}>{children}</Tag>;
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  className: PropTypes.string,
};

Heading.defaultProps = {
  level: 1,
  className: '',
};

export default Heading;
