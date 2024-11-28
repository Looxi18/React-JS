import React from 'react'
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <>
            <nav>
                <div>
                    <h1>
                        Melody Shop</h1>
                </div>

                <div className='Buttons'>
                    <button className='discButton'>
                        <Link to="/">
                            <img className='discImg'
                                src="https://img.icons8.com/?size=100&id=43826&format=png&color=FFFFFF" alt="Disc icon" />
                        </Link>
                    </button>
                    <button className='productsButton'>
                        <Link to="/products">Productos</Link>
                    </button>
                    <button className='contactButton'>
                        <Link to="/contact">Contacto</Link>
                    </button>
                </div>

            </nav>

        </>

    );


}