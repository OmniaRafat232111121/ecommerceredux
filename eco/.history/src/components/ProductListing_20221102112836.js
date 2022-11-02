import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/ProductActions";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
const products=useSelector((state)=>state.allProducts.products)
const dispatch=useDispatch();
const fetchProducts=async()=>{
    const response=await axios 
    .get("https://dummyjson.com/products/page=1&limit=10")
    .catch((err)=>{
      console.log('Err:',err)
    })
    dispatch(setProducts(response.data.products))
  }
  useEffect(() => {
    fetchProducts();
  }, [])
  console.log('Products:',products)
  return (
    <div className='container grid grid-cols-3'>
        <ProductComponent/>
    </div>
  )
}

export default ProductListing
