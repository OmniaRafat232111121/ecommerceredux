import React from 'react'
import {useDispatch,useSelector} from 'rect-redux';
const ProductListing = () => {
  const tproducts=useSelector((state)=>state.allProducts.products)
  const dispatch=useDispatch();
  const fetchProducts=async()=>{
    const response=a
  }
  return (
    <div>
      
    </div>
  )
}

export default ProductListing
