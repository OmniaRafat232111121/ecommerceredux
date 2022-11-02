import React from 'react'

const ProductDetails = () => {
  const {productId}=useParams();
  console.log(productId)
  return (
    <div>
      <h1>Product Deata</h1>
    </div>
  )
}

export default ProductDetails
