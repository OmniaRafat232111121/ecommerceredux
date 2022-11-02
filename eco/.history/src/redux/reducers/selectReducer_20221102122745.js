import { ActionTypes } from "../typess";
const initialState={
    products:[],
}
export const selectProductReducers=(state=initialState,{type,payload})=>{
   switch(type){
    case ActionTypes.SELECTED_PRODUCT:
            return{...state,...payload}
    default:
        return state
   }
}
