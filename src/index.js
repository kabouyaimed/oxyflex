import React from 'react';
import { createMuiTheme } from "@material-ui/core/styles";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';
import { ThemeProvider } from "@material-ui/core/styles";
const container = document.getElementById('root');
const root = createRoot(container);
const muiTheme = createMuiTheme();
const theme = extendTheme();
root.render(

  <ChakraProvider theme={theme} resetCSS>
  <ThemeProvider theme={muiTheme}>
      <App />
      </ThemeProvider>
  </ChakraProvider>

 
);


