import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { createBrowserRouter, Link, RouterProvider } from 'react-router';

import authLoader from './components/layouts/AuthLayout/AuthLayout.loader';
import sidebarLoader from './components/layouts/SidebarLayout/sidebarLayout.loader';
import Login from './components/pages/Auth/Login';
import Register from './components/pages/Auth/Register';
import Dashboard from './components/pages/Dashboard';
import Projects from './components/pages/Projects';
import DetailProject from './components/pages/Projects/DetailProject';
import Settings from './components/pages/Settings';
import SnackbarProvider from './components/ui/Snackbar';

const theme = createTheme({
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    loader: sidebarLoader,
    element: <Dashboard />,
  },
  {
    path: '/login',
    loader: authLoader,
    element: <Login />,
  },
  {
    path: '/register',
    loader: authLoader,
    element: <Register />,
  },
  {
    path: '/projects',
    loader: sidebarLoader,
    element: <Projects />,
  },
  {
    path: '/projects/:id',
    loader: sidebarLoader,
    element: <DetailProject />,
  },
  {
    path: '/settings',
    loader: sidebarLoader,
    element: <Settings />,
  },
]);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <SnackbarProvider>
          <CssBaseline />
          <RouterProvider router={router} />
        </SnackbarProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default App;
