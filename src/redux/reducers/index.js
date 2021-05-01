import { combineReducers } from "redux";
import products from "./productReducer";
import basket from "./basketReducer";
import filter from "./filterReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  products,
  basket,
  filter,
  apiCallsInProgress
});

export default rootReducer;
