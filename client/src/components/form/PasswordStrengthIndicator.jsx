import PropTypes from 'prop-types';
import { CheckCircle, XCircle } from 'lucide-react';

function PasswordStrengthIndicator({ password }) {
  const criteria = [
    {
      label: '8 caractères minimum',
      test: () => password.length >= 8,
    },
    {
      label: 'Au moins une majuscule',
      test: () => /[A-Z]/.test(password),
    },
    {
      label: 'Au moins une minuscule',
      test: () => /[a-z]/.test(password),
    },
    {
      label: 'Au moins un chiffre',
      test: () => /[0-9]/.test(password),
    },
    {
      label: 'Au moins un caractère spécial',
      test: () => /[^A-Za-z0-9]/.test(password),
    },
  ];

  return (
    <div className="password-strength">
      <h3 className="strength-title">Force du mot de passe</h3>
      <div className="strength-list">
        {criteria.map((criterion, index) => {
          const isValid = criterion.test();
          return (
            <div key={index} className={`strength-item ${isValid ? 'valid' : 'invalid'}`}>
              {isValid ? <CheckCircle size={16} /> : <XCircle size={16} />}
              <span>{criterion.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

PasswordStrengthIndicator.propTypes = {
  password: PropTypes.string.isRequired,
};

export default PasswordStrengthIndicator;
