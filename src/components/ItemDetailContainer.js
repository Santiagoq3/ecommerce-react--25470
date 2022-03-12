import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';
import "./itemdetailcontainer.css"


const productos = [
  {
    nombre: "Remera Tupac Shakur",
    descripcion: "Remera Tupac Shakur unisex",
    img: "https://http2.mlstatic.com/D_NQ_NP_933035-MLA48780767513_012022-V.webp",
    precio: 3200,
    categoria: "vestir",
    stock: 10,
    id:1
  },
  {
    nombre: "Disco Tupac Shakur",
    descripcion: "Disco Tupac Shakur - Me against the world",
    img: "https://http2.mlstatic.com/D_NQ_NP_961565-MLA47567008739_092021-V.webp",
    precio: 3200,
    categoria: "musica",
    stock: 10,
    id:2
  },
]
 

const productPromise = new Promise((resolve,rej)=>{

  setTimeout(() => {
    resolve(productos)
  }, 3000);
})
export const ItemDetailContainer = () => {

  const [producto, setProducto] = useState([])
  const {id} = useParams()
  const getItem = ()=>{

    return productPromise
  }

  useEffect(()=>{

    getItem()
    .then((data)=> setProducto(data.filter(p => p.id == id)))
    .catch((err)=> console.log(err))
  },[id])
  console.log(producto)
  return (
    <div className='itemdetailcontainer'>

      <ItemDetail producto={producto} />
    </div>
  )
}
