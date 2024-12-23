import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { sendOrder } from '../../../firebase/firebase'; 
import './Cart.css'



const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });
  




  const [cart, clearCart] = useContext(CartContext);  

  const isCartEmpty = cart.length === 0;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (isCartEmpty){
      alert('¡El carrito esta vacio! Necesitas añadir productos antes de proceder al Checkout.')
      return;
    }
    
    const orderData = {
      customer: formData,
      items: cart,
      total: cart.reduce((total, item) => total + item.price * item.quantity, 0),
      createdAt: new Date().toISOString(),
    };

    try {
      const orderId = await sendOrder(orderData);
      console.log('Orden guardada con éxito! ID:', orderId);
      alert('¡Gracias por tu compra!');

      clearCart();

    } catch (error) {
      console.error("Error al guardar la compra:", error);
      alert('Hubo un problema al procesar tu compra, por favor intenta de nuevo.');
    }
    setFormData({
      name: '',
      email: '',
      address: '',
      city: '',
      postalCode: '',
      country: '',
    });
  };

  return (
    <div className="checkout-container">
      <h2>Formulario de Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre completo: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo electrónico: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Dirección: </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">Ciudad: </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="postalCode">Código Postal: </label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="country">País: </label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Confirmar compra</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
