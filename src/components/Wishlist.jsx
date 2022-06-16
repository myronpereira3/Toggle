import React from 'react'
import { useContext } from 'react'
import { CardContext } from '../Context/CartContext'

const Wishlist = () => {
    const {count}=useContext(CardContext)
  return (
    <div>Wishlist is {count}</div>
  )
}

export default Wishlist