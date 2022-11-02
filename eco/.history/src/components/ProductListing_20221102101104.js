import React from 'react'
import {useDispatch,useSelector} from 'rect-redux';
const ProductListing = () => {
  const tproducts=useSelector((state)=>state.allProducts.products)
  const dispatch=useDispatch();
  
  return (
    <div>
      
    </div>
  )
}

export default ProductListing
