/**
 * @copyright 2024 John Lin
 * @license Apache-2.0
 */

/**
 * Node Modules
 */
import PropTypes from 'prop-types';

const Menu = ({ classes = '', children }) => {
  return <div className={`menu ${classes}`}>{children}</div>;
};

Menu.propTypes = {
  classes: PropTypes.string,
  children: PropTypes.node,
};

export default Menu;
