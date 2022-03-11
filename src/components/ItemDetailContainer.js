import React, { useEffect, useState } from 'react'
import { ItemDetail } from './ItemDetail';
import "./itemdetailcontainer.css"


const producto = 
  {
    nombre: "Remera Tupac Shakur",
    descripcion: "Remera Tupac Shakur unisex",
    img: "https://http2.mlstatic.com/D_NQ_NP_933035-MLA48780767513_012022-V.webp",
    precio: 3200,
    categoria: "vestir",
    stock: 10
  }
 

const productPromise = new Promise((resolve,rej)=>{

  setTimeout(() => {
    resolve(producto)
  }, 3000);
})
export const ItemDetailContainer = () => {

  const [producto, setProducto] = useState({})

  const getItem = ()=>{

    return productPromise
  }

  useEffect(()=>{

    getItem()
    .then((data)=> setProducto(data))
    .catch((err)=> console.log(err))
  })

  return (
    <div className='itemdetailcontainer'>

      <ItemDetail producto={producto} />
    </div>
  )
}
