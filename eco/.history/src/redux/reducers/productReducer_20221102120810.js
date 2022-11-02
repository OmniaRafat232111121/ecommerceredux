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
export const selectedProduct=(state=initialState,{type,payload})=>{
    switch(type){
        case ActionTypes.:
            return{
                ...state,
                products:payload
            }
        default:
            return state
       }
}