import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ItemList } from './ItemList';
import "./itemlistcontainer.css"

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
export const ItemListContainer = ({greeting}) => {

  const [productos, setProductos] = useState([])
  const {id} = useParams()

  
  useEffect(()=>{

    if(id){
      productPromise
      .then((data)=>{
        setProductos(data.filter(p => p.categoria == id))
      })
    }else{
      productPromise
      .then((data)=> setProductos(data))
      .catch((err)=> console.log(err))
    }
  },[id])


  return (
    <section className='itemlistcontainer'>
        <h2>
            {greeting}
        </h2>
        <ItemList productos={productos} />
    </section>
  )
}
