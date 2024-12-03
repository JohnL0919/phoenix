/**
 * @copyright 2024 John Lin
 * @license Apache-2.0
 */

/**
 * Node Modules
 */
import PropTypes from 'prop-types';

const TextField = ({
  classes = '',
  helperText,
  label,
  name,
  placeholder = '',
  fieldClasses = '',
  ...rest
}) => {
  return (
    <div className={`text-field-wrapper ${classes}`}>
      <label htmlFor={name}>{label}</label>
      <input
        className={`text-field ${fieldClasses}`}
        id={name}
        name={name}
        placeholder={placeholder}
        {...rest}
      />
      {helperText && <p className='helper-text'> {helperText} </p>}
    </div>
  );
};
TextField.propTypes = {
  classes: PropTypes.string,
  helperText: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  fieldClasses: PropTypes.string,
};

export default TextField;
