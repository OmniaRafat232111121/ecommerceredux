import React from 'react'
import { useSelector } from 'react-redux'

const ProductComponent = () => {
    const products=useSelector((state)=>state.allProducts)
  return (
    <div className=''>
      
    </div>
  )
}

export default ProductComponent
