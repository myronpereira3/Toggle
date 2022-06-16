import React, { useContext } from 'react'
import { CardContext } from '../Context/CartContext'

const Card = () => {
  const {count,setCount}=useContext(CardContext)
  return (
    <div>Card
        <button onClick={()=>setCount(count+1)} >add to card </button>
    </div>
  )
}

export default Card