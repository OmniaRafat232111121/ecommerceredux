import React,{useSelector} from 'react'

const ProductListing = () => {
    const products=useSelector((state)=>state);
    console.log(products)
  return (
    <div className='container grid grid'>
      <h1>ProductListing</h1>
    </div>
  )
}

export default ProductListing
