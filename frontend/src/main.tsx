import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { SystemRoutes } from './SystemRoutes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SystemRoutes></SystemRoutes>
  </React.StrictMode>
)
