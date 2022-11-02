import React,{useEffect} from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import ProductComponent from './ProductComponent';
import axios from "axios";
import { setProducts } from '../redux/actions/ProductActions';

const ProductListing = () => {
    const products=useSelector((state)=>state.allProducts.produ);
    const dispatch = useDispatch();
    const fetchProducts=async()=>{
        const response=await axios
        .get("https://dummyjson.com/products")
        .catch((err)=>{
            console.log("Err:",err)
        });
       dispatch(setProducts(response.data))
      
    }
    useEffect(()=>{
        fetchProducts()
    },[])
 
    //console.log("products: ",products)
  return (
    <div className='container grid grid-cols-3'>
      <h1>ProductListing</h1>
      <ProductComponent/>
    </div>
  )
}

export default ProductListing
