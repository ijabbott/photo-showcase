import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PhotoShowcase from './PhotoShowcase.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PhotoShowcase />
  </StrictMode>,
)
