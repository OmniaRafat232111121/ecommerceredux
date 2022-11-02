import { ActionTypes } from "../typess/";
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
   switch(type){
    case ActionTypes.SELECTED_PRODUCT:
        return{...state,...payload}
   
   default:
        return state;
   }
           
  };