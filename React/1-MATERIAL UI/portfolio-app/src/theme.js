// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3', // Blue color
    },
    secondary: {
      main: '#f50057', // Pink color
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // Replace with your preferred font
  },
  overrides: {
    MuiButton: {
      containedPrimary: {
        backgroundColor: '#f50057', // Pink color for primary buttons
      },
    },
  },
  transitions: {
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
});

export default theme;
