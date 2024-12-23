import './Cart.css' 


const CartItem = ( { product }) => {

  return (
    <div className="cart-item">
      <img className='img-item' src={product.image} alt={product.title} />
      <div className="cart-item-details">
        <h4>{product.title}</h4>
        <p>{product.artist}</p>
        <p>Precio: US$ {product.price}</p>
        <p>Cantidad: {product.quantity}</p>

      </div>
    </div>
  );
};

export default CartItem;
