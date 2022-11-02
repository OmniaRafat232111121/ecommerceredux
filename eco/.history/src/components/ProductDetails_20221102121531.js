import axios from 'axios';
import React,{useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { selectedProductsReducer } from '../redux/reducers/productReducer';
const ProductDetails = () => {
  const product=useSelector((state)=>state.product);
  const dispatch = useDispatch();
  const {productId}=useParams();
  console.log(productId);
  console.log(product)
  const fetchProductDetails=async()=>{
    const response=await axios
    .get(`https://dummyjson.com/products/${productId}`)
    .catch((err)=>{
      console.log('Err:',err)
    })

   dispatch(selectedProductsReducer(response.data.product))
  }
  useEffect(() => {
  if(productId&& productId!=="") fetchProductDetails()
  }, [productId])
  return (
    <div>
      <h1>Product Deatails</h1>
    </div>
  )
}

export default ProductDetails
