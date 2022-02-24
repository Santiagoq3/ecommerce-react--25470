import React from 'react'
import "./itemlistcontainer.css"
export const ItemListContainer = ({greeting}) => {
  return (
    <section className='itemlistcontainer'>
        <h2>
            {greeting}
        </h2>
    </section>
  )
}
