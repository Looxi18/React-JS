import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { getSingleProduct } from '../../../firebase/firebase'
import { useParams } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './ItemDetail.css'
export default function ProductDetail() {

  const [, , addItem] = useContext(CartContext)

  const handleClick = () => {
    addItem(prod)
  }

  const { id } = useParams();
  const [prod, setSingleProd] = useState(id)

  useEffect(() => {
    getSingleProduct(id).then((product) =>
      setSingleProd(product)
    );
  }, [id]);


  return (
    <>
      <div className='cartDetail' >
        <h3>Álbum: {prod.title}</h3>

        <img className='imgDetail' src={prod.image} alt=" {prod.title} " />
        <p className='descriptionDetail' > {prod.description}</p>
        <p>Artista: {prod.artist} </p>
        <p>Categoria: {prod.category}</p>
        <p>Precio ${prod.price}</p>

        <div className='buttonsDetail' >
          <div className='buttonCount' >
          <button onClick={handleClick} >+</button>
          <button onClick={handleClick} >-</button>
          </div>
          
          <button onClick={handleClick} >Agregar al carrito</button>

        </div>


      </div>

    </>
  );
}