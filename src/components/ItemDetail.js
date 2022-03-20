import React, { useContext } from 'react'
import { cartContext } from '../context/CartContext'
import { ItemCount } from './ItemCount'
import "./itemdetail.css"

export const ItemDetail = ({producto}) => {
  const [item] = producto
  const {addItem} = useContext(cartContext)
  const handleAdd = (cantidadElegida = 1)=>{

    addItem(item,cantidadElegida)
    alert(`la cantidad añadida al carrito es ${cantidadElegida}`)
  }

  return (
    <div className='itemdetail'>
        
        {

          item ? 
          <>
          
            <img src={item.img}  />
            <div className='itemdetail-producto'>
                
                <h2 className='itemdetail-producto-nombre'>{item.nombre}</h2>
                <p className='itemdetail-producto-precio'>{item.precio}$</p>
                <p className='itemdetail-producto-descripcion'>{item.descripcion}</p>
                <ItemCount initial={1} stock={item.stock} onAdd={handleAdd}/>
            </div>
            
          
          </>

          :
          <span>Cargando...</span>
          
        }
        
    </div>
  )
}
