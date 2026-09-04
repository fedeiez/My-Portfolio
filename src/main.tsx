import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'font-awesome/css/font-awesome.min.css'

import Home from './Home';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
