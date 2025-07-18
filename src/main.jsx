import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeToggleProvider, useThemeToggle } from "./theme/ThemeContext";

// Component to access theme from context and inject into both MUI and styled-components
const Root = () => {
  const { theme } = useThemeToggle();
  return (
    <MuiThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </StyledThemeProvider>
    </MuiThemeProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeToggleProvider>
        <Root />
      </ThemeToggleProvider>
    </BrowserRouter>
  </Provider>
);
