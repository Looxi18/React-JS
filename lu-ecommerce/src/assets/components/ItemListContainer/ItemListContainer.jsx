import React from 'react'


const ItemListContainer = ({mensaje, fn}) => {
  return (
    <>
    <div>{mensaje}</div>
    <Button fn={fn} text="Agregar al carrito" />
    <button>HomeButton</button>
    </>
    
  )
}

export default ItemListContainer