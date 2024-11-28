import { useEffect, useState} from 'react';
import { getProducts } from '../../../../asyncMock.js';
import ProductCard from './../ProductCard/ProductCard.jsx'



export default function ProductsContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts
      .then((data) => setProducts(data))
      .catch((error) => console.log(error))
      .finally(console.log('Promesa completada'));
  }, []);
  return (
    <>
      {products.map((prod) => (
        <ProductCard key={prod.id} product={prod} />
      ))}
    </>
  );
}



