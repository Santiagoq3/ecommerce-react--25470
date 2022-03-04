import React, { useEffect, useState } from 'react'
import { ItemCount } from './ItemCount'
import { ItemList } from './ItemList';
import "./itemlistcontainer.css"

const onAdd = ()=>{

  console.log("Agregado al carrito");
}

const productos = [
  {
    nombre: "Remera Tupac Shakur",
    descripcion: "Remera Tupac Shakur unisex",
    img: "https://http2.mlstatic.com/D_NQ_NP_933035-MLA48780767513_012022-V.webp",
    precio: 3200,
    categoria: "vestir",
    stock: 10
  },
  {
    nombre: "Disco Tupac Shakur",
    descripcion: "Disco Tupac Shakur - Me against the world",
    img: "https://http2.mlstatic.com/D_NQ_NP_961565-MLA47567008739_092021-V.webp",
    precio: 3200,
    categoria: "musica",
    stock: 10
  },
]

const productPromise = new Promise((res,rej)=>{


  setTimeout(() => {
    
    res(productos)
  }, 3000);
})

export const ItemListContainer = ({greeting}) => {

  const [productos, setProductos] = useState([])

  useEffect(()=>{

    productPromise
    .then((data)=> setProductos(data))
    .catch((err)=> console.log(err))
  })

  return (
    <section className='itemlistcontainer'>
        <h2>
            {greeting}
        </h2>
        <ItemList productos={productos} />

    </section>
  )
}
