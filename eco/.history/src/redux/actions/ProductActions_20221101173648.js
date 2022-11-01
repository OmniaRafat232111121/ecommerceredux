import { ActionTypes } from "../types/action-types"

export const setProduct=(product)=>{
    return{
        type:ActionTypes.SET_PRODUCT,
        payload:product
    }
}