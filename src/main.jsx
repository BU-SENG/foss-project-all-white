import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SavedProvider } from './SavedContext.jsx'
import { ProductProvider } from './ProductContext.jsx' // --- IMPORT THIS ---

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductProvider> {/* --- WRAP OUTERMOST --- */}
      <SavedProvider>
        <App />
      </SavedProvider>
    </ProductProvider>
  </React.StrictMode>,
)