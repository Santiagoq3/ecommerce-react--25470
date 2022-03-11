import React from 'react'
import { Item } from './Item'
import "./itemlist.css"
export const ItemList = ({productos}) => {

  return (
    <ul className='itemlist'>
      {
        productos.map((producto,index) =>{
          return <Item key={index} producto={producto} />
        })
      }
    </ul>
  )
}
