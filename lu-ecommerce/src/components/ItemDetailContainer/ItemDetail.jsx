import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { getSingleProduct } from '../../../firebase/firebase'
import { useParams } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './ItemDetail.css'
export default function ProductDetail() {

  const [, , addItem] = useContext(CartContext)
  const { id } = useParams();
  const [prod, setSingleProd] = useState(null)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    getSingleProduct(id).then((prod) =>
      setSingleProd(prod)

    );
  }, [id]);


  const handleAdd = () => {
    setSingleProd(prod)
    if (prod){
      addItem({ ...prod, quantity })
    }
  };

const handleIncrease = () =>{
  setQuantity (quantity + 1);
};

  const handleDecrease = () =>{
    if (quantity > 1){
      setQuantity (quantity - 1);
    }
  };


  



  return (
    <>
      <div className='cartDetail' >
        <h3>Álbum: {prod?.title}</h3>
        <img className='imgDetail' src={prod?.image} alt=" {prod.title} " />
        <p className='descriptionDetail' > {prod?.description}</p>
        <p>Artista: {prod?.artist} </p>
        <p>Categoria: {prod?.category}</p>
        <p>Precio US$ {prod?.price}</p>

        <div className='buttonsDetail' >
          <div className='buttonCount' >
          <button onClick={handleIncrease} >+</button>
          <span> {quantity} </span>
          <button onClick={handleDecrease} >-</button>
          </div>
          
          <button onClick={handleAdd} >Agregar al carrito</button>

        </div>


      </div>

    </>
  );
}