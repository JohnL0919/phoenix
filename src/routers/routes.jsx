/**
 * @copyright 2024 John Lin
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { createBrowserRouter } from 'react-router-dom';

/**
 * Componenets
 */
import App from '../App.jsx';

/**
 * Router
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);

export default router;
