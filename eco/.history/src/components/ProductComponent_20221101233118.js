import React from 'react'
import { useSelector } from 'react-redux'

const ProductComponent = () => {
    const products=useSelector((state)=>state.allProducts.products)
  return (
    <div className='gird grid-cols-2 lg:grid-cols-3 '>
    <div className='card rounded-md w-full h-[150px] bg-green-500 mt-[200px]'>
    <h1>Red</h1>
    </div>
    <div className='card rounded-md w-full h-[150px] bg-green-500 mt-[200px]'>
    <h1>Red</h1>
    </div>
    <div className='card rounded-md w-full h-[150px] bg-green-500 mt-[200px]'>
    <h1>Red</h1>
    </div>
      
    </div>
  )
}

export default ProductComponent
