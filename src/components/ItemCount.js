import React, { useState } from 'react'
import "./itemcount.css"
export const ItemCount = ({initial = 1,stock,onAdd}) => {

  const [count, setCount] = useState(initial)


  const agregar = ()=>{

    if(count < stock){

      setCount(count + 1);
    }
  }

  const restar = ()=>{
    if(count > initial){
      setCount(count - 1)
    }
  }

  return (
    <div className='itemcount'>
        
      <div className='itemcount__display-count'>
        <i onClick={restar} className="fas fa-minus itemcount__btn"></i>
        <span>
            {count}
        </span>
        <i onClick={agregar} className="fas fa-plus itemcount__btn"></i>
      </div>
      <button onClick={()=> onAdd(count)} className='itemcount__add'>
        Agregar al carrito
      </button>
    </div>
  )
}
