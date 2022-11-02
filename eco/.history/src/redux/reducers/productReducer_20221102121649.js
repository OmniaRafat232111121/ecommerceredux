import { ActionTypes } from "../types/action-types";

const initialState={
    products:[],
}
export const productReducer=(state=initialState,{type,payload})=>{
   switch(type){
    case ActionTypes.SET_PRODUCT:
        return{
            ...state,
            products:payload
        }
    default:
        return state
   }
}
export const selectedProductsReducer = (state = {}, { type, payload }) => {
    console.log(type);
    switch (type) {
      case ActionTypes.
        return { ...state, ...payload };
      case ActionTypes.REMOVE_SELECTED_PRODUCT:
        return {};
      default:
        return state;
    }
  };