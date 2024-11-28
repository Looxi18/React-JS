import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { getProduct } from '../../../../asyncMock.js';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(getProduct(id));
  }, []);

  return (
    <>
      <h1>Vista de Detalle de {product.title} </h1>
      <p></p>
      <h3>{product.title}</h3>
      <img src={product.image} alt="" />
      <p>{product.description}</p>
      <p> Año: {product.year} </p>
      <p>Precio: US$ {product.price}</p>
    </>
  );
}
