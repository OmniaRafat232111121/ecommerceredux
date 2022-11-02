import { combineReducers } from "redux";
import { productReducer,selectedProducts } from "./productReducer";

 export const reducers=combineReducers({
    allProducts:productReducer,
    product:selectedProducts
})
