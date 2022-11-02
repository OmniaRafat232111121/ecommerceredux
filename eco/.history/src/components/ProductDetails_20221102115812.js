import React from 'react'
import {}
const ProductDetails = () => {
  const {productId}=useParams();
  console.log(productId)
  return (
    <div>
      <h1>Product Deatails</h1>
    </div>
  )
}

export default ProductDetails
