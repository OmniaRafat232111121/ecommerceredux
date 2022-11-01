import { ActionTypes } from "../types/action-types"

export const setProduct=(products)=>{
    return{
        type:ActionTypes.SET_PRODUCT,
        payload:products
    }
}
export const selectedProduct=(products)=>{
    return{
        type:ActionTypes.SELECTED_PRODUCT,
        payload:products
    }
}
export const setP=(products)=>{
    return{
        type:ActionTypes.SET_PRODUCT,
        payload:products
    }
}