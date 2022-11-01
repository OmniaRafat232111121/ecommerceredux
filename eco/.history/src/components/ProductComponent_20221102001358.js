import React from 'react'
import { useSelector } from 'react-redux'

const ProductComponent = () => {
    const products=useSelector((state)=>state.allProducts.products)
const renderList=products.map((product)=>{
  const {id,title,price,category}=products[

})
    return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-16 px-4 pt-12 sm:pt-20 text-black '>
    <div className='card rounded-md w-full h-[150px] bg-green-500 text-bold mt-[40px] '>
   <div className='content'>
   <div className="header">{title}</div>
   <div className="meta price">$ {price}</div>
   <div className="meta">{category}</div>
   </div>
    
  
      </div>
    </div>
  )
}

export default ProductComponent
