/**
 * @copyright 2024 John Lin
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { createBrowserRouter } from 'react-router-dom';

/**
 * Components
 */
import App from '../App.jsx';
import Register from '../../pages/Register.jsx';
import Login from '../../pages/Login.jsx';

/**
 * Actions
 */
import registerAction from './actions/registerAction.js';

/**
 * Router
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/register',
    element: <Register />,
    action: registerAction,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export default router;
