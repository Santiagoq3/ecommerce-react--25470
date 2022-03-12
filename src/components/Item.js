import React from 'react'
import { Link } from 'react-router-dom';
import "./item.css"
import { ItemCount } from './ItemCount';

export const Item = ({producto}) => {

  
  console.log(producto);
  return (
    <li className='item'>
      <Link to={`/item/${producto.id}`} >
        <div className='item__top'>
          <img className='item__img' src={producto.img} />
        </div>
        <div className='item__bottom casa perro'>
          <h3>{producto.nombre}</h3>
          <p>{producto.descripcion}</p>
          <p>{producto.categoria}</p>
          <p className='item__price'>{producto.precio}$</p>
        </div> 
      </Link>
    </li>
  )
}
