import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// --- IMPORT THE PROVIDERS ---
import { AuthProvider } from './AuthContext.jsx'
import { ProductProvider } from './ProductContext.jsx'
import { SavedProvider } from './SavedContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* WRAP THE APP LIKE LAYERS OF AN ONION */}
    <AuthProvider>
      <ProductProvider>
        <SavedProvider>
          <App />
        </SavedProvider>
      </ProductProvider>
    </AuthProvider>
  </React.StrictMode>,
)