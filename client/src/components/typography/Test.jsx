import PropTypes from 'prop-types';

function Text({ children, variant, className }) {
  return <p className={`text ${variant} ${className}`}>{children}</p>;
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['body', 'small']),
  className: PropTypes.string,
};

Text.defaultProps = {
  variant: 'body',
  className: '',
};

export default Text;
