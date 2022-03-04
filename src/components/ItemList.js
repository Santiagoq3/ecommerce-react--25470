import React from 'react'
import { Item } from './Item'
import "./itemlist.css"
export const ItemList = ({productos}) => {

  return (
    <ul className='itemlist'>
      {
        productos.map(producto =>{
          return <Item producto={producto} />
        })
      }
    </ul>
  )
}
