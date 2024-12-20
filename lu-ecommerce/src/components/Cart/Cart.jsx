import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from './CartItem';

const Cart = () => {
  const [cart] = useContext(CartContext);

  return (
    <div className="cart">
      <h2>Carrito</h2>
      {cart.length === 0 ? 
      (
        
        <p>No tienes productos en el carrito.</p>
      ) : (
        cart.map((item, index) => (
          <CartItem key={index} product={item} />
        ))
      )}
    </div>
  );
};

export default Cart;
