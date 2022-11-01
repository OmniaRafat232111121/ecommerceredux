import React from 'react'
import { useSelector } from 'react-redux'

const ProductComponent = () => {
    const products=useSelector((state)=>state.allProduct)
  return (
    <div className=''>
      
    </div>
  )
}

export default ProductComponent
