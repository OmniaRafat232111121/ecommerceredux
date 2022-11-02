import { combineReducers } from "redux";
import { productReducer,selectedProducts } from "./productReducer";
import { selectProductReducers } from "./selectReducer";

 export const reducers=combineReducers({
    allProducts:productReducer,
    product:selectedProducts
})
