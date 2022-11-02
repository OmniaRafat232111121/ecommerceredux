import React ,{useEffect} from 'react'
import {useDispatch,useSelector} from 'rect-redux';
import ProductComponent from './ProductComponent';
import {s}
const ProductListing = () => {
  const products=useSelector((state)=>state.allProducts.products)
  const dispatch=useDispatch();
  const fetchProducts=async()=>{
    const response=await axios 
    .get("https://dummyjson.com/products")
    .catch((err)=>{
      console.log('Err:',err)
    })
    dispatch(setProducts(response.data))
  }
  useEffect(() => {
    fetchProducts();
  }, [])
  return (
    <div className='container grid grid-cols-3'>
        <ProductComponent/>
    </div>
  )
}

export default ProductListing
