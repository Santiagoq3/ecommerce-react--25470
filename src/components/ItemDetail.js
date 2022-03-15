import React from 'react'
import { ItemCount } from './ItemCount'
import "./itemdetail.css"


export const ItemDetail = ({producto}) => {
  const [item] = producto
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
                <ItemCount initial={1} stock={item.stock}/>
            </div>
          
          </>

          :
          <span>Cargando...</span>
        }
    </div>
  )
}
