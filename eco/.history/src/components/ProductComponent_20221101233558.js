import React from 'react'
import { useSelector } from 'react-redux'

const ProductComponent = () => {
    const products=useSelector((state)=>state.allProducts.products)
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-16 px-4 pt-12 sm:pt-20 text-black '>
    <div className='card rounded-md w-full h-[150px] bg-green-500 mt-[200px]'>
    <div>
    <h1
    </div>
    <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
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