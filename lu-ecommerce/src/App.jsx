import './App.css'
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemList from './components/ItemListContainer/ItemList';
import { Routes, Route } from 'react-router-dom';
import CartWidget from './components/Navbar/CartWidget';
import { CartProvider } from './context/CartContext';
import ProductDetail from './components/ItemDetailContainer/ItemDetail';
import CartItem from './components/Cart/CartItem';



function App() {
  return (
    <>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemList />} />
          <Route exact path="/:category" element={<ItemList />} />
          <Route exact path="/product/:id" element={<ProductDetail />} />
          <Route exact path="/Cart" element={<CartItem />} />
        </Routes>
      </CartProvider>

    </>
  );
}

export default App;



