import React from 'react'
import { useSelector } from 'react-redux'

const ProductComponent = () => {
  const products=useSelector((state)=>state.allProducts.products)
  const renderList=products.map((product)=>{
    retur
  })
  return (
    <div>
      <h1>hhh</h1>
    </div>
  )
}

export default ProductComponent
