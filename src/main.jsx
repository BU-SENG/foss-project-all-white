import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SavedProvider } from './SavedContext.jsx' // Import the Provider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SavedProvider> {/* Wrap App with SavedProvider */}
      <App />
    </SavedProvider>
  </React.StrictMode>,
)