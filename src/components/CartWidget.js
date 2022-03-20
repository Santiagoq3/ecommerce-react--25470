import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../context/CartContext'
export const CartWidget = () => {
  const {cart} = useContext(cartContext)
  return (
    <Fragment>
      <Link to="/cart">
      
        <i className="fas fa-shopping-cart"> {cart.length}</i>
      
      </Link>
    </Fragment>
  )
}


