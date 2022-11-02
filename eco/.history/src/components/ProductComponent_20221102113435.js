import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title,thumbnail,description, name} = product;
    return (
     <div className='grid grid-cols-1 lg:grid-cols-4 gap-x-4 gap-y-16  px-20 pt-12 sm:pt-20 text-black ' key={id}>
      <div className='card rounded-md w-[300px]   text-black  bg-black text-bold mt-[40px] '>
    <div  className=" flex justify-center items-center text-white">
    <img className="mt-3 rounded-md py-4 px-6 h-ful w-full" src={thumbnail} alt={title}/>
    </div>
    <div className="content py-[20px]">
    <button className="text-bold py-20 bg-green-800 rounded-md  h-4 px-[20px]  py-[] text-black">{title}</button>
  </div>
     
      
    
        </div>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;