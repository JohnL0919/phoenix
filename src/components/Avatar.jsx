/**
 * @copyright 2024 John Lin
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import PropTypes from 'prop-types';

/**
 * Custom modules
 */
import { avatars } from '../lib/appwrite';

import React from 'react';

const Avatar = ({ name }) => {
  return (
    <figure className='avatar'>
      <img
        src={avatars.getInitials(name, 48, 48)}
        alt={name}
        width={48}
        height={48}
      />
    </figure>
  );
};

Avatar.propTypes = {
  name: PropTypes.string,
};

export default Avatar;
