import { createContext, useState } from 'react';

//lo que tenemos que consumir - creamos el contexto
export const CartContext = createContext();

//el que provee acceso al contexto
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  //funciones para administrar cambios en el carro
  const addItem = (item) => {
    const existingProduct = cart.findIndex(product => product.id === item.id);
    if (existingProduct === -1){
      setCart([...cart, item])
    }else{
      const updatedCart = [...cart];
      updatedCart[existingProduct].quantity +=1;
      setCart(updatedCart);
    }
  };

  return (
    <CartContext.Provider value={[cart, setCart, addItem]}>
      {children}
    </CartContext.Provider>
  );
}