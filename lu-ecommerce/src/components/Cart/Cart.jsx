import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import './Cart.css'

const Cart = () => {
  const [cart] = useContext(CartContext);

  const [totalPrice, setTotalPrice] = useState ("")

  useEffect(() => {
   let price = cart.reduce((total, item) => total + item.price * item.quantity, 0)
  
    setTotalPrice(price)
  } , [cart])
  




  return (
    <div className="cart">
      <h2>Carrito</h2>
      {cart.length === 0 ? 
      (
        
        <p>No tienes productos en el carrito.</p>
      ) : (
        cart.map((item) => (
          <CartItem key={item.title } product={item}/>
        ))
      )}
      
      <div>
        <div >
        <p>Total de la compra: US$ {totalPrice} </p>
        </div>


        <Link to="/Checkout" ><button>
          Checkout
        </button></Link>
        
      </div>
    </div>
  );
};

export default Cart;
