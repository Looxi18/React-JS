import React from 'react';


const CartItem = ( prod ) => {
    console.log(prod)
  return (
    <div className="cart-item">
      <img src={prod.image} alt={prod.title} />{
      }
      <div className="cart-item-details">
        <h4>{prod.title}</h4>
        <p>{prod.artist}</p>
        <p>Precio: ${prod.price}</p>
        <p>Cantidad: {prod.quantity || 1}</p>
      </div>
    </div>
  );
};

export default CartItem;
