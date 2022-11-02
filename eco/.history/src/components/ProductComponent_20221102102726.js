import React from 'react'
import { useSelector } from 'react-redux'

const ProductComponent = () => {
  const products=useSelector((state)=>state.allProducts.products)
  const renderList=products.map((product)=>{
    const {id,title,description,price,thumbnail}=product
    return(
  <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-16 px-4 pt-12 sm:pt-20 text-black ' key={id}>
      <div className='card rounded-md w-[300px] h-[200px]  text-white text-bold mt-[40px] '>
    <div>
    <img src={thumbnail} alt={title}/>
    </div>
    <div className="content">
    <div>{title}</div>
    <div>${price}</div>
    <div >{description}</div>
  </div>
  </div>
  </div>
     
    )
  })
  return (
    <>{renderList}</>
  )
}

export default ProductComponent
