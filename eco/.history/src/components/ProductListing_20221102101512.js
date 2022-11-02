import React ,{useEffect} from 'react'
import {useDispatch,useSelector} from 'rect-redux';
const ProductListing = () => {
  const products=useSelector((state)=>state.allProducts.products)
  const dispatch=useDispatch();
  const fetchProducts=async()=>{
    const response=await axios 
    .get("https://dummyjson.com/products")
    .catch((err)=>{
      console.log('Err:',err)
    })
    console.log(response.data)
  }
  useEffect(() => {
    fetchProducts();
  }, [])
  return (
    <div className='container grid grid-cols-3'>
        <Pro
    </div>
  )
}

export default ProductListing
