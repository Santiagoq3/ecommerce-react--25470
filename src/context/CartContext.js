import React, { useState } from 'react'

export const cartContext = React.createContext()

export const CartContext = ({children}) => {

    const {Provider} = cartContext
    const [cart, setCart] = useState([])
    let cartProductAux = []

    const addItem = (item,quantity)=>{
      let cartProduct = {item,quantity};
      if(isInCart(item)){
        cartProduct = cart.find(p => p.item.id === item.id)
        cartProduct.quantity = cartProduct.quantity + quantity;
        cartProductAux = [...cart]
      }else{
         cartProductAux = [...cart,cartProduct]
      }
        setCart(cartProductAux)
    }

    const removeItem = (item)=>{
      cartProductAux = cart.filter(p => p.item.id !== item.id )
      setCart(cartProductAux)
    }

    const clear= ()=>{
      setCart([])
    }

    const isInCart = (item)=>{
      const result = cart.some(p => p.item.id == item.id)

      return result
    }
    console.log(cart)
  return (
    <Provider value={{cart,addItem,clear,removeItem}}>
        {children}
    </Provider>
  )
}
