import React from 'react'
import { useParams } from 'react-router-dom';
const ProductDetails = () => {
  const {productId}=useParams();
  console.log(productId)
  const fetchProductDetails=()=>{
    const response=a
  }
  return (
    <div>
      <h1>Product Deatails</h1>
    </div>
  )
}

export default ProductDetails
