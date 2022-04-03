import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';
import "./itemdetailcontainer.css"
import {query,getDocs,getDoc,doc,collection,where} from "firebase/firestore"
import { dbFirebase } from '../firebaseConfig';
export const ItemDetailContainer = () => {

  const [producto, setProducto] = useState({})
  const {id} = useParams()


  useEffect(()=>{
    const q = query(collection(dbFirebase,"productos"),where("id","==",id))

    getDocs(q)
    .then((resp)=> setProducto(resp.docs.map(p => ({producto:p.data()}))))
    .catch((err)=> console.log(err))

    const docRef = doc(dbFirebase, 'productos', id);
     getDoc(docRef)
     .then((res)=> setProducto(res.data()))

    
  },[id])
  console.log(producto)
  return (
    <div className='itemdetailcontainer'>
      <ItemDetail producto={producto} />
    </div>
  )
}
