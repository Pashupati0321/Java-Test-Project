// App.tsx
import React from 'react';
import './App.css';
import ButtonComponent from './ButtonComponent';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  typography: {
    button: {
      fontSize: '1rem',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      letterSpacing: '0.1em',
    },
  },
  palette: {
    primary: {
      main: '#1976d2',
      contrastText: '#fff',
    },
    secondary: {
      main: '#dc004e',
      contrastText: '#fff',
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <header className="App-header">
          <h1>Welcome to My App</h1>
          <p>This is a simple React application using TypeScript and Material-UI.</p>
          <ButtonComponent />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
