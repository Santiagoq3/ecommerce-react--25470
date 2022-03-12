import React from 'react'
import { CartWidget } from './CartWidget'
import "./navbar.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <header className='header'>
      <Link to="/">

        <h1 className='header-brand-name'>Tupac shakur - fake store</h1>
      </Link>
        <nav className='header-nav'>
           <ul>
               <Link to="/category/musica">Musica</Link>
               <Link to="/category/vestir">Vestir</Link>
               <Link to="/category/accesorios">Accesorios</Link>
           </ul>
        </nav>
        <>
          <CartWidget />
        </>
    </header>
  )
}
