import React from 'react'
import {useDispatch,useSelector} from 'rect-redux';
const ProductListing = () => {
  const tproducts=useSelector((state)=>state.allProducts.products)
  const dispatch=useDispatch();
  const fetchProducts=async()=>{
    const response=await axios 
    .get("https://dummyjson.com/products")
    .catch((err)=>{
      console.log(err)
    })
  }
  useEffect(() => {
    fetchPr
  }, [])
  return (
    <div>
      
    </div>
  )
}

export default ProductListing
