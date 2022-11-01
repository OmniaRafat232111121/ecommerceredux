import { ActionTypes } from "../types/action-types";

const initialState={
    products:[
        {
            id:1,
            title:'m'
        }
    ],
}
export const productReducer=(state=initialState,{type,payload})=>{
   switch(type){
    case ActionTypes.SET_PRODUCT:
        return{
            ...state,products:payload
        }
    default:
        return state
   }
}
