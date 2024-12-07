/**
 * @copyright 2024 John Lin
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import PropTypes from 'prop-types';
import { motion } from 'motion/react';

const Snackbar = ({ snackbar }) => {
  return (
    <>
      {snackbar.open && (
        <motion.div  variants={} className={'snackbar ${snackbar.type}'}>
          <motion.span>{snackbar.message}</motion.span>
        </motion.div>
      )}
    </>
  );
};

Snackbar.propTypes = {
  snackbar: PropTypes.object,
};

export default Snackbar;
