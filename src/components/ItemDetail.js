import React from 'react'
import { ItemCount } from './ItemCount'
import "./itemdetail.css"


export const ItemDetail = ({producto}) => {
  return (
    <div className='itemdetail'>
       <img src={producto.img}  />
       <div className='itemdetail-producto'>
          <h2 className='itemdetail-producto-nombre'>{producto.nombre}</h2>
          <p className='itemdetail-producto-precio'>{producto.precio}$</p>
          <p className='itemdetail-producto-descripcion'>{producto.descripcion}</p>
          <ItemCount initial={1} stock={producto.stock}/>
       </div>
    </div>
  )
}
