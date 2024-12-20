import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {
    const [cart] = useContext(CartContext);
    return (


        <div>
            <button className='cartButton'><img className='cartIcon' src="https://img.icons8.com/?size=100&id=9671&format=png&color=000000" alt="cart" />
            
            {cart.length}

            </button>
      
        </div>
    )
}

export default CartWidget