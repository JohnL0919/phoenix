/**
 * @copyright 2024 John Lin
 * @license Apache-2.0
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

/**
 * Custom modules
 */
import router from './routers/routes'; // Ensure your 'router' is set up correctly in this file

/**
 * Components
 */
import SnackbarProvider from './contexts/SnackbarContext';

/**
 * CSS Link
 */
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SnackbarProvider>
      <RouterProvider router={router} />
    </SnackbarProvider>
  </StrictMode>,
);
