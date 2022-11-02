import axios from 'axios';
import React,{useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { selectProductReducers } from '../redux/reducers/selectReducer';
const ProductDetails = () => {
  const product=useSelector((state)=>state.product);
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
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
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
