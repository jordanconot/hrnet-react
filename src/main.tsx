import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.tsx'
import { EmployeeProvider } from './context/EmployeeContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EmployeeProvider>
      <App />
    </EmployeeProvider>
  </StrictMode>,
)