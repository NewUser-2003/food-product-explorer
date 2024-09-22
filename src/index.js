import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProductProvider } from './context/ProductContext';  // Import ProductProvider
import { CartProvider } from './context/CartContext';        // Import CartProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductProvider>  {/* Wrap ProductProvider to manage product state */}
      <CartProvider>   {/* Wrap CartProvider to manage cart state */}
        <App />
      </CartProvider>
    </ProductProvider>
  </React.StrictMode>
);

reportWebVitals();