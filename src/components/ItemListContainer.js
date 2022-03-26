import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ItemList } from './ItemList';
import "./itemlistcontainer.css"
import {getDocs,query,collection,where} from "firebase/firestore"
import { dbFirebase } from '../firebaseConfig';




export const ItemListContainer = ({greeting}) => {

  const [productos, setProductos] = useState([])
  const {idCategory} = useParams()

  
  useEffect(()=>{

    if(idCategory){

     const q = query(collection(dbFirebase,"productos"),where("categoria","==",idCategory))

     getDocs(q)
     .then((resp)=> setProductos(resp.docs.map(p=> ({productos:p.data(),id: p.id}))))
     .catch((err)=> console.log(err))

    }else{

      getDocs(collection(dbFirebase,"productos"))
      .then((resp)=> setProductos(resp.docs.map(p => ({productos:p.data(),id:p.id}))) )
      .catch((err)=> console.log(err))

    }
  },[idCategory])

  console.log(productos)
  return (
    <section className='itemlistcontainer'>
        <h2>
            {greeting}
        </h2>
        <ItemList productos={productos} />
    </section>
  )
}
