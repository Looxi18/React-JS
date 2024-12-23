import './App.css'
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemList from './components/ItemListContainer/ItemList';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import ProductDetail from './components/ItemDetailContainer/ItemDetail';
import Cart from './components/Cart/Cart';
import CheckoutForm from './components/Cart/CheckoutForm'



function App() {
  return (
    <>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemList />} />
          <Route exact path="/:category" element={<ItemList />} />
          <Route exact path="/product/:id" element={<ProductDetail />} />
          <Route exact path="/Cart" element={<Cart />} />
          <Route exact path="/Checkout" element={<CheckoutForm />} />
        </Routes>
      </CartProvider>

    </>
  );
}

export default App;



