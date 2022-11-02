import React from 'react'
import { useSelector } from 'react-redux'

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-16 px-4 pt-12 sm:pt-20 text-black ' key={id}>
      <div className='card rounded-md w-[300px] h-full  text-black text-bold mt-[40px] '>
    <div className='content'>

    <h2 className='bg-purple-400'>{title}</h2>
    <p>{price}</p>
   
    </div>
        </div>
      </div>
      );
    });
    return <>{renderList}</>;
  };
  
  export default ProductComponent;
