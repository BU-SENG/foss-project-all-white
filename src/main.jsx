import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SavedProvider } from './SavedContext.jsx'
import { ProductProvider } from './ProductContext.jsx'
import { AuthProvider } from './AuthContext.jsx' // --- Import AuthProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider> {/* --- Outer Wrap --- */}
      <ProductProvider>
        <SavedProvider>
          <App />
        </SavedProvider>
      </ProductProvider>
    </AuthProvider>
  </React.StrictMode>,
)