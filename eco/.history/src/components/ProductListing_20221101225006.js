import React from 'react'
import { useDispatch ,use} from 'react-redux';

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
