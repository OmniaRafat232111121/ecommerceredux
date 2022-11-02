import { ActionTypes } from "../typess/action-types";
const initialState={
    products:[],
}
export const selectProductRedu=(state=initialState,{type,payload})=>{
   switch(type){
    case ActionTypes.SELECTED_PRODUCT:
            return{...state,...payload}
    default:
        return state
   }
}
