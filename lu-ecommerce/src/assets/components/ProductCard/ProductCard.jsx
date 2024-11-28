import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <>
      <article>
        <h2>
          {product.title} - {product.id}
        </h2>
        <img src={product.image} alt={product.title} />
        <p>US$ {product.price}</p>
        <button>
          <Link to={`/product/${product.id}`}>Más detalles</Link>
        </button>
      </article>
    </>
  );
}