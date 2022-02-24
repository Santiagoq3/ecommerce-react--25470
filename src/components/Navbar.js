import React from 'react'
import { CartWidget } from './CartWidget'
import "./navbar.css"
export const Navbar = () => {
  return (
    <header className='header'>
        <h1 className='header-brand-name'>Tupac shakur - fake store</h1>
        <nav className='header-nav'>
           <ul>
               <li><a href=''>Musica</a></li>
               <li><a href=''>Vestir</a></li>
               <li><a href=''>Accesorios</a></li>
           </ul>
        </nav>
        <CartWidget />
    </header>
  )
}
