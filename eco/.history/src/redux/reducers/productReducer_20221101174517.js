import { ActionTypes } from "../types/action-types";

const initialState={
    products:[],
}
export const productReducer=(state=initialState,action)=>{
   switch(type){
    case ActionTypes.SET_PRODUCT:
        return{
            ...stat
        }
        break;
    default:
        break;
   }
}