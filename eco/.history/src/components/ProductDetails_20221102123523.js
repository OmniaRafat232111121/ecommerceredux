import axios from 'axios';
import React,{useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { selectedProducts } from '../redux/reducers/selectReducer';
const ProductDetails = () => {
  const product=useSelector((state)=>state.product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  const {productId}=useParams();
  // console.log(productId);
  //console.log(product);
  const fetchProductDetails=async()=>{
    const response=await axios
    .get(`https://dummyjson.com/products/${productId}`)
    .catch((err)=>{
      console.log('Err:',err)
    })

   dispatch(selectProductReducers(response.data.product))
  }
  useEffect(() => {
  if(productId&& productId!=="") fetchProductDetails();
  }, [productId])

  return (
    <div className="grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div >
          <div >
            <div>AND</div>
            <div >
              <div >
                <img  src={image} />
              </div>
              <div>
                <h1>{title}</h1>
                <h2>
                  <a >${price}</a>
                </h2>
                <h3 >{category}</h3>
                <p>{description}</p>
                <div tabIndex="0">
                  <div className="">
                    <i className="shop icon"></i>
                  </div>
                  <div className="">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
  )
}

export default ProductDetails;
