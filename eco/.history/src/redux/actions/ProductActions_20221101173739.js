import { ActionTypes } from "../types/action-types"

export const setProducts=(products)=>{
    return{
        type:ActionTypes.SET_PRODUCT,
        payload:products
    }
}
export const selectedProducts=(products)=>{
    return{
        type:ActionTypes.SELECTED_PRODUCT,
        payload:products
    }
}
export const removedProducts=(products)=>{
    return{
        type:ActionTypes,
        payload:products
    }
}