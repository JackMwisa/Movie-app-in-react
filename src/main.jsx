import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./components/App";
import { BrowserRouter } from "react-router";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Provider } from 'react-redux';
import store from './app/store';  

const theme = createTheme();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter></Provider>
);