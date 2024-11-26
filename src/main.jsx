import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { VisibleContextProvider } from './contexts/visibleContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <VisibleContextProvider>
      <App />
    </VisibleContextProvider>    
  </StrictMode>,
)
