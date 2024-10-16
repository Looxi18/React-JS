import React from 'react'
import Button from '../Button/Button'

const ItemListContainer = ({mensaje, fn}) => {
  return (
    <>
    <div>{mensaje}</div>
    <Button fn={fn} text="Agregar al carrito" />
    </>
    
  )
}

export default ItemListContainer