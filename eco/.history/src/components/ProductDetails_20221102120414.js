import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom';
const ProductDetails = () => {
  const {productId}=useParams();
  console.log(productId)
  const fetchProductDetails=async()=>{
    const response=await axios
    .get(`https://dummyjson.com/products/${productId}`)
    .then


  }
  return (
    <div>
      <h1>Product Deatails</h1>
    </div>
  )
}

export default ProductDetails
