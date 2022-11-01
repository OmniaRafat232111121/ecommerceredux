import React from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import ProductComponent from './ProductComponent';

const ProductListing = () => {
    const products=useSelector((state)=>state);
    const dispatch = useDispatch();
    console.log(products)
  return (
    <div className='container grid grid-cols-3'>
      <h1>ProductListing</h1>
      <ProductComponent
    </div>
  )
}

export default ProductListing
