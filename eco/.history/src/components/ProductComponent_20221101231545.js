import React from 'react'
import { useSelector } from 'react-redux'

const ProductComponent = () => {
    const products=useSelector((state)=>state.allProducts.products)
  return (
    <div className='four column w'>
      
    </div>
  )
}

export default ProductComponent
