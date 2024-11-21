/**
 * @copyright 2024 John Lin
 * @license Apache-2.0
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Router, RouterProvider } from 'react-router-dom';

/**
 * Custom modules
 */
import router from './routers/routes';

/**
 * CSS Link
 */
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
