import { createContext, useContext, useState } from 'react';

export const CartContext = createContext();
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const clearCart = () =>{
    setCart([])
  }

  const addItem = (item) => {
    const existingProduct = cart.find(product => product.title === item.title );
    if (existingProduct) {
      const updatedCart = cart.map(product =>
        
        product.title  === item.title 
          ? { ...product, quantity: product.quantity + item.quantity}
          : product
      );

      setCart(updatedCart) } else {
      setCart(cart => [...cart, item]);
    }

   



  };

  return (
    <CartContext.Provider value={[cart, setCart, addItem, clearCart]}>
      {children}
    </CartContext.Provider>
  );
}


export const useCart = () => useContext(CartContext)