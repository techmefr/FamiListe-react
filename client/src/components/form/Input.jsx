import PropTypes from 'prop-types';
import { Loader2 } from 'lucide-react';

function Input({ type = 'text', icon: Icon, error, loading, ...props }) {
  return (
    <div className="relative">
      {Icon && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <Icon size={20} />
        </div>
      )}

      <input
        type={type}
        className={`
          w-full bg-white dark:bg-gray-900
          px-4 py-3 rounded-lg
          ${Icon ? 'pl-10' : ''}
          border-2 transition-colors
          ${
            error
              ? 'border-red-300 dark:border-red-800 focus:border-red-500 dark:focus:border-red-600'
              : 'border-gray-200 dark:border-gray-800 focus:border-primary dark:focus:border-primary-400'
          }
          focus:outline-none
          disabled:bg-gray-50 dark:disabled:bg-gray-900
          disabled:cursor-not-allowed
          placeholder:text-gray-400 dark:placeholder:text-gray-600
        `}
        {...props}
      />

      {loading && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          <Loader2 className="w-5 h-5 text-gray-400 animate-spin" />
        </div>
      )}
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  icon: PropTypes.elementType,
  error: PropTypes.bool,
  loading: PropTypes.bool,
};

export default Input;
