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
  // const [category, setCategory] = useState("")
  // let params = useParams()
  const { category } = useParams();
  /*useEffect(()=>{
    getSingleProduct('KkN7BJHsKWCeNOtV2jzk').then((product)=>
      setSingleProd(product) 
    );
  },[]);*/

  // useEffect(() => {
  //   getProducts().then((products) => setMyProds(products));
  // },

  //   []);

  useEffect(() => {
    /* getSingleProduct('ZjkF4RdijYUaR3gseS30').then((product) =>
      setSingleProd(product)
    ); */
    if (category) {
      filterProductsByCategory(category).then((products) => setMyProds(products));
    } else {
      getProducts().then((products) => setMyProds(products));
    }
    // setCategory(params.category)



  }, [category]);





  /*return (
    <section>
      {singleProd && (
        <p>
          Producto:{singleProd.title} - Precio $ {singleProd.price}
        </p>
      )}
      {myProds && myProds.map((prod) => <Item key={prod.id} prod={prod} />)}
    </section>
  );*/

  return (
    <div className='diskCard'>
      {myProds && myProds.map((prod) => <Item key={prod.id} prod={prod} />)}
    </div>
  )


}



