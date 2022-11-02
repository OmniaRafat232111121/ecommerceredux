import axios from 'axios';
import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectedProduct } from '../redux/reducers/productReducer';
const ProductDetails = () => {
  const product=useSelector((state)=>state.product)
  const {productId}=useParams();
  console.log(productId)
  const fetchProductDetails=async()=>{
    const response=await axios
    .get(`https://dummyjson.com/products/${productId}`)
    .catch((err)=>{
      console.log('Err:',err)
    })

   dispatch(selectedProduct())
  }
  return (
    <div>
      <h1>Product Deatails</h1>
    </div>
  )
}

export default ProductDetails
