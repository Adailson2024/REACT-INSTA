import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from "styled-components";
import PaginaInicial from "./components/PaginaInicial";
import ResetCSS from "./Reset";

// eslint-disable-next-line react-refresh/only-export-components
const GlobalStyle = createGlobalStyle`
  body {
    // Estilo do body aqui
    display: flex;
    background-color: #FB6B6B;
    justify-content: center;
  }
`;
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ResetCSS />
    <GlobalStyle />
    <PaginaInicial />
  </React.StrictMode>,
  
)
