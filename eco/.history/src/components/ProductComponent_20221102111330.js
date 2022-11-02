import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, avatar, name} = product;
    return (
     <div className='grid grid-cols-1 lg:grid-cols-4 gap-x-4 gap-y-16  px-20 pt-12 sm:pt-20 text-black ' key={id}>
      <div className='card rounded-md w-[300px] h-[200px]  text-black bg-purple-500 text-bold mt-[40px] '>
    <div  className=" flex justify-center items-center">
    <img src={avatar} alt={title}/>
    </div>
    <div className="content">
    <div className="text">{title}</div>
    <div>{name}</div>

  </div>
     
      
    
        </div>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;