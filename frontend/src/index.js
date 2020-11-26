import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { LocationProvider } from '@reach/router';
import { ThemeProvider } from '@material-ui/styles';
import theme from './styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <LocationProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </LocationProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

