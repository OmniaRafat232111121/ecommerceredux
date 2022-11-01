import React from 'react'
import { useSelector } from 'react-redux'

const ProductComponent = () => {
    const products=useSelector((state)=>state.allProducts.products)
    const {id,title,category}=products[0]
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-16 px-4 pt-12 sm:pt-20 text-black '>
    <div className='card rounded-md w-full h-[150px] bg-green-500 text-bold'>
    <div>
    <h1>Hello</h1>
    </div>
    <div className="content">
                <div className="font-bold text-2xl my-6">{category}</div>
                <div className="text-gray-600 text-xl">$33</div>
                <div className="meta">{title}</div>
              </div>
    </div>
    <div className='card rounded-md w-full h-[150px] bg-green-500 '>
    <h1>Red</h1>
    </div>
    <div className='card rounded-md w-full h-[150px] bg-green-500 mt-[200px'>
    <h1>Red</h1>
    </div>
      
    </div>
  )
}

export default ProductComponent
