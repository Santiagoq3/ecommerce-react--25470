import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export const CartWidget = () => {
  return (
    <Fragment>
      <Link to="/cart">
      
        <i className="fas fa-shopping-cart"> 0</i>
      
      </Link>
    </Fragment>
  )
}


