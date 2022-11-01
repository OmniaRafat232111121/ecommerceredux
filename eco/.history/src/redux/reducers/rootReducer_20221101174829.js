import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

 exportconst reducers=combineReducers({
    allproduct:productReducer
})
