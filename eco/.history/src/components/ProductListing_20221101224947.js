import React from 'react'
import ,{useSelector}

const ProductListing = () => {
    const products=useSelector((state)=>state);
    const dispatch = useDispatch();
    console.log(products)
  return (
    <div className='container grid grid-cols-3'>
      <h1>ProductListing</h1>
    </div>
  )
}

export default ProductListing
