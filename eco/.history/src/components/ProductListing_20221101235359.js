import React from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import ProductComponent from './ProductComponent';
import axios from "axios";

const ProductListing = () => {
    const products=useSelector((state)=>state);
    const dispatch = useDispatch();
    console.log(products)
    const fetchProducts=async()=>{
        const response=await axios
        .get("https://api.storerestapi.com/products")
    }
  return (
    <div className='container grid grid-cols-3'>
      <h1>ProductListing</h1>
      <ProductComponent/>
    </div>
  )
}

export default ProductListing
