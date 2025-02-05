import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { StepProvider } from './contexts/StepContext.tsx';
import { PlanProvider } from './contexts/PlanContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StepProvider>
      <PlanProvider>
        <App />
      </PlanProvider>
    </StepProvider>
  </StrictMode>,
);
