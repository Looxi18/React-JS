import { useState, useEffect } from 'react';
import {
  filterProductsByCategory,
  getProducts
} from '../../../firebase/firebase';
import Item from './Item'
import './ItemList.css'
import { useParams } from 'react-router-dom';

export default function ItemList() {
  const [myProds, setMyProds] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    if (category) {
      filterProductsByCategory(category).then((products) => setMyProds(products));
    } else {
      getProducts().then((products) => setMyProds(products));
    }
  }, [category]);

  return (
    <div className='diskCard'>
      {myProds && myProds.map((prod) => <Item key={prod.id} prod={prod} />)}
    </div>
  )


}



