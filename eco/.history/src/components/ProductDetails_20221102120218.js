import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom';
const ProductDetails = () => {
  const {productId}=useParams();
  console.log(productId)
  const fetchProductDetails=()=>{
    const response=await axios()
  }
  return (
    <div>
      <h1>Product Deatails</h1>
    </div>
  )
}

export default ProductDetails
