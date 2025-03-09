import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import StarsBackground from './pages/background.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StarsBackground />
    <App />
  </StrictMode>,
)
