import React from 'react'
import { Link } from 'react-router-dom';
import "./item.css"
import { ItemCount } from './ItemCount';

export const Item = ({producto}) => {
  const {productos,id} = producto;

  console.log(productos,id)
  return (
    <li className='item'>
      <Link to={`/item/${id}`} >
        <div className='item__top'>
          <img className='item__img' src={productos.img} />
        </div>
        <div className='item__bottom casa perro'>
          <h3>{productos.nombre}</h3>
          <p>{productos.descripcion}</p>
          <p>{productos.categoria}</p>
          <p className='item__price'>{productos.precio}$</p>
        </div> 
      </Link>
    </li>
  )
}
