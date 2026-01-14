import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App-redesign.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
