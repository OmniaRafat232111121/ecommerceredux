import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { selectProductReducers } from "./selectReducer";

 export const reducers=combineReducers({
    allProducts:productReducer,
    product:selectedProducts
})
