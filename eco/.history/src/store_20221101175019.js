import { createStore } from "redux";
import { reducers } from "./redux/reducers/rootReducer";

const store=createStore(reducers)