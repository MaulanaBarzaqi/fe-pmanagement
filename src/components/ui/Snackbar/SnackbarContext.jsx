import { Snackbar } from '@mui/material';
import { createContext, useState } from 'react';

const defaultState = {
  open: false,
  message: '',
  toggleSnackbar() {},
};

export const SnackbarContext = createContext(defaultState);

const SnackbarProvider = ({ children }) => {
  const [snackbarData, setSnackcbarData] = useState({
    open: false,
    message: '',
  });

  const toggleSnackbar = (toggle, message = '') => {
    setSnackcbarData({
      open: toggle,
      message,
    });
  };

  return (
    <SnackbarContext.Provider
      value={{
        snackbarData,
        toggleSnackbar,
      }}
    >
      {children}
      <Snackbar
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        onClose={() => toggleSnackbar(false)}
        message={snackbarData.message}
        open={snackbarData.open}
      />
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;
