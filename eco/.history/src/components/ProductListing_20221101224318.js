import React from 'react'

const ProductListing = () => {
    const products=useSelector((state)=>state);
    console.log(products)
  return (
    <div>
      <h1>ProductLi</h1>
    </div>
  )
}

export default ProductListing
