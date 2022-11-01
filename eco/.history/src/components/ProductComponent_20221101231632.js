import React from 'react'
import { useSelector } from 'react-redux'

const ProductComponent = () => {
    const products=useSelector((state)=>state.allProducts.products)
  return (
    <div className='gird grid-cols-4 gap-x-4 gap-y-5'>
    <div className=''>
    </div>
      
    </div>
  )
}

export default ProductComponent
