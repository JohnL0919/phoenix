/**
 * @copyright 2024 John Lin
 * @license Apache-2.0
 */

/**
 * Node Modules
 */
import PropTypes from 'prop-types';
import React from 'react';

const TextField = ({
  classes,
  helperText,
  label,
  name,
  placeholder = '',
  fieldClasses,
  ...rest
}) => {
  return (
    <div className=''>
      <label
        htmlFor=''
        className=''
      >
        {label}
      </label>

      <input
        className=''
        id={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextField;
