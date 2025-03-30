import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ResetCSS from "./Reset";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ResetCSS />
    <App />
  </StrictMode>,
)
