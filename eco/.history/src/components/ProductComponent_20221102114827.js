import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title,thumbnail,description, brand} = product;
    return (
     <div className='grid grid-cols-1 lg:grid-cols-4 gap-x-3 gap-y-16  px-20 pt-12 sm:pt-20 text-black ' key={id}>
      <div className='card rounded-md w-[200px] text-black  bg-gray-300 text-bold mt-[40px] pb-6'>
    <div  className=" flex justify-center items-center text-white">
    <img className="mt-3 rounded-md py-4 px-6 h-ful w-full" src={thumbnail} alt={title}/>
    </div>
    <div className="content mt-4 flex justify-center items-center ">
    <button className="text-bold   bg-black rounded-md text-center  px-[30px] py-[10px]  text-white">{brand}</button>
  </div>
     
      
    
        </div>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;