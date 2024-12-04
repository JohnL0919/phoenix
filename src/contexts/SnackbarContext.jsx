/**
 * @copyright 2024 John Lin
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { createContext, useState, useRef, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';

const initialCtxValue = {
  snackbar: {
    open: false,
    message: '',
  },
  showSnackbar: ({ message, type = 'info', timeOut = 5000 }) => {},
};

export const SnackbarContext = createContext(initialCtxValue);

const SnackbarProvider = ({ children }) => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    type: 'info',
  });
  const timeoutRef = useRef();

  // Show Snackbar
  const showSnackbar = useCallback(
    ({ message, type = 'info', timeOut = 5000 }) => {
      // Clear any existing timeout to prevent overlap
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      // Set the new snackbar message and type
      setSnackbar({ open: true, message, type });

      // Auto-hide the snackbar after timeOut
      timeoutRef.current = setTimeout(() => {
        setSnackbar((prev) => {
          return { ...prev, open: false };
        });
      }, timeOut);
    },
    [],
  );

  //Hide Snackbar manually (if needed)
  const hideSnackbar = useCallback(() => {
    // Clear any existing timeout to prevent overlap
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setSnackbar({ open: false, message: '', type: 'info' });
  }, []);

  // Memorize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => {
    return { showSnackbar, hideSnackbar };
  }, [showSnackbar, hideSnackbar]);

  return (
    <SnackbarContext.Provider value={contextValue}>
      {children}
    </SnackbarContext.Provider>
  );
};
SnackbarProvider.propTypes = {
  children: PropTypes.any,
};
export default SnackbarProvider;
