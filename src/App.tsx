import React from 'react';
import { Routes, Route } from 'react-router-dom';
// Asegúrate de que este archivo exista: src/context/CartContext.tsx
import { CartProvider } from './context/cart/CartProvider'; 
// Asegúrate de que estos archivos existan:
import Header from './components/Header';
import HomePage from './pages/Home';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';


function App() {
  return (
    <CartProvider>
      <div className=" min-h-screen">
        
        <Header />
      
        <main className="container mx-auto max-w-7xl pt-4 pb-20">
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} /> 
            <Route path="/cart" element={<CartPage />} />
            
            <Route path="*" element={<HomePage />} />
          </Routes>
          
        </main>
      </div>
    </CartProvider>
  );
}

export default App;
