import React from 'react'
import { useSelector } from 'react-redux'

const ProductComponent = () => {
  const products=useSelector((state)=>state.all)
  return (
    <div>
      <h1>hhh</h1>
    </div>
  )
}

export default ProductComponent
