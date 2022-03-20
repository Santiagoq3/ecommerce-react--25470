import React from 'react'

export const CartContext = ({children}) => {
    const cartContext = React.createContext()
    const {Provider} = cartContext

  return (
    <Provider value={{}}>
        {children}
    </Provider>
  )
}
