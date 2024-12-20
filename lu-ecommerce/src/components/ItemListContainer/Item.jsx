import './ItemList.css'
// import { useContext } from 'react';
// import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';


export default function ProductCard({ prod }) {
  // const [, , addItem]=useContext(CartContext)

  // const handleClick=()=>{
  //   addItem(prod)
  // }


  return (
    <>
      <div className="card">
        <h4>{prod.title}</h4>
        <img className='cardImg' src={prod.image} alt={prod.title} />
        {/* <p>{prod.description}</p> */}
        <p>Artista: {prod.artist} </p>
        <p>Categoria: {prod.category}</p>
        <p>Precio US$ {prod.price}</p>


        <button className='cardButton'
        >
          <Link to={`/product/${prod.id}`}>Ver detalles</Link>
        </button>
      </div>
    </>
  );
}
