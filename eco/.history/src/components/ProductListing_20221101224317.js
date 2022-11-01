import React from 'react'

const ProductListing = () => {
    const products=useSelector((state)=>state);
    console.log(products)
  return (
    <div>
      <h1>Product</h1>
    </div>
  )
}

export default ProductListing
