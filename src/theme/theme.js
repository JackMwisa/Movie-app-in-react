import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1976d2', contrastText: '#ffffff' },
    secondary: { main: '#1565c0' },
    background: {
      default: '#f4f9ff',
      paper: '#ffffff',
    },
    text: {
      primary: '#0d1b2a',
      secondary: '#546e7a',
    },
    action: { hover: '#e3f2fd' },
  },
  typography: { fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#e50914', contrastText: '#ffffff' },
    secondary: { main: '#03dac6' },
    background: {
      default: '#141414',
      paper: '#1f1f1f',
    },
    text: {
      primary: '#ffffff',
      secondary: '#bbbbbb',
    },
    action: { hover: '#333333' },
  },
  typography: { fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
        },
      },
    },
  },
});
