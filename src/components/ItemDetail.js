import React, { useContext } from 'react'
import { cartContext } from '../context/CartContext'
import { ItemCount } from './ItemCount'
import "./itemdetail.css"

export const ItemDetail = ({producto}) => {

  const {addItem} = useContext(cartContext)

  
  const handleAdd = (cantidadElegida = 1)=>{

    addItem(producto,cantidadElegida)
    alert(`la cantidad añadida al carrito es ${cantidadElegida}`)
  }

  return (
    <div className='itemdetail'>
        
        {

producto ? 
          <>
          
            <img src={producto.img}  />
            <div className='itemdetail-producto'>
                
                <h2 className='itemdetail-producto-nombre'>{producto.nombre}</h2>
                <p className='itemdetail-producto-precio'>{producto.precio}$</p>
                <p className='itemdetail-producto-descripcion'>{producto.descripcion}</p>
                <ItemCount initial={1} stock={producto.stock} onAdd={handleAdd}/>
            </div>
            
          
          </>

          :
          <span>Cargando...</span>
          
        }
        
    </div>
  )
}
