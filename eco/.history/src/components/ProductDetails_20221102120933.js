import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom';
const ProductDetails = () => {
  co
  const {productId}=useParams();
  console.log(productId)
  const fetchProductDetails=async()=>{
    const response=await axios
    .get(`https://dummyjson.com/products/${productId}`)
    .catch((err)=>{
      console.log('Err:',err)
    })


  }
  return (
    <div>
      <h1>Product Deatails</h1>
    </div>
  )
}

export default ProductDetails
