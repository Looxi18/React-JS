import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"
import { CartContext } from '../../context/CartContext'
const NavBar = () => {
    const [cart] = useContext(CartContext);
    return (

        <>
            <nav>
                <div className='logo'>
                    <h1>
                        MELODY SHOP
                    </h1>
                    <img className='diskImg' src="https://img.icons8.com/?size=100&id=43826&format=png&color=000000" alt="disk image" />
                </div>


                <div className='pages' >
                    <p>Categorias:</p>
                    <li><Link to="/">Todas</Link></li>
                    <li><Link to="/Rock-Metal">Rock-Metal</Link></li>
                    <li><Link to="/Alternativa">Alternativa</Link></li>
                    <li><Link to="/Reggae">Reggae</Link></li>
                    <li><Link to="/Electronica-ElectroPop">Electronica-ElectroPop</Link></li>
                    <li><Link to="/Indie">Indie</Link></li>
                </div>

                <div>

                    <Link to="/Cart" ><button className='cartButton'>


                        <img className='cartIcon' src="https://img.icons8.com/?size=100&id=9671&format=png&color=000000" alt="cart" />



                        {cart.length > 0 ? (
                            <p>{cart.length}</p>

                        ) : (
                            <p className='cartCounter'>0</p>
                        )}
                    </button></Link>











                </div>




            </nav>

        </>

    )
}

export default NavBar
