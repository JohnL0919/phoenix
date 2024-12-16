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
import ResetLink from '../../pages/ResetLink.jsx';
import ResetPassword from '../../pages/ResetPassword.jsx';

/**
 * Loaders
 */
import registerLoader from './loaders/registerLoader.js';
import loginLoader from './loaders/loginLoader.js';

/**
 * Actions
 */
import registerAction from './actions/registerAction.js';
import loginAction from './actions/loginAction.js';
import resetLinkAction from './actions/resetLinkAction.js';

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
    loader: registerLoader,
    action: registerAction,
  },
  {
    path: '/login',
    element: <Login />,
    loader: loginLoader,
    action: loginAction,
  },
  {
    path: '/reset-link',
    element: <ResetLink />,
    action: resetLinkAction,
  },
  {
    path: '/reset-password',
    element: <ResetPassword />,
  },
]);

export default router;
