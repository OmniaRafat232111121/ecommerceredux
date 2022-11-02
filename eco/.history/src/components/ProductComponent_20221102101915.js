import React from 'react'
import { useSelector } from 'react-redux'

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
     <h1>Hello</h1>
    )
  });
  return <>{renderList}</>
  
}

export default ProductComponent;
