import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title,thumbnail,description, name} = product;
    return (
     <div className='grid grid-cols-1 lg:grid-cols-4 gap-x-4 gap-y-16  px-20 pt-12 sm:pt-20 text-black ' key={id}>
      <div className='card rounded-md w-[300px] h-[400px]  text-black  bg-green-600 text-bold mt-[40px] '>
    <div  className=" flex justify-center items-center">
    <img className="mt-3 rounded-md py" src={thumbnail} alt={title}/>
    </div>
    <div className="content">
    <div className="text-bold py-20">{title}</div>
  </div>
     
      
    
        </div>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;