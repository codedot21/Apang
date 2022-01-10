import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles";

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
