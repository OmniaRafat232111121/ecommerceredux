import React from 'react'
import { useSelector } from 'react-redux'

const ProductComponent = () => {
  const products=useSelector((state)=>state.allProducts.products)
  const renderList=products.map((product)=>{
    return(

    )
  })
  return (
    <>
    {re}
     
    </>
  )
}

export default ProductComponent
