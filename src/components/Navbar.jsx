import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { ThemeContext } from '../Context/ThemeContext'
import Wishlist from './Wishlist'

const Navbar = () => {
  const{isAuth,login,logout}=useContext(AuthContext)
  const{isLight,Toggle}=useContext(ThemeContext)
  return (
    <div >
      <button onClick={()=>{
        if(isAuth)
        {
         logout()
         
         
        }
        else
        {
        
          login("M","Y")
        }
      }} >
      {isAuth ? "logout":"login"}
      </button>

      <button onClick={Toggle}>{isLight?"Dark":"Light"}</button>
        <Wishlist/>
    </div>
  )
}

export default Navbar