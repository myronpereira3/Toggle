import {React,useContext} from 'react'
import Card from './Card'

import { AuthContext } from '../Context/AuthContext'


const Product = () => {
  const{isAuth}=useContext(AuthContext)
  return (
    <div>
      product:{isAuth?"logout":"login"}
      
      <Card/></div>
  )
}

export default Product