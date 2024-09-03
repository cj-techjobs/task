import { combineReducers } from "redux";
import { authReducer } from "./auth";
// import { creatorReducer } from "./creator";
import { productsReducer } from "./products";

export default combineReducers({
  auth: authReducer,
  products: productsReducer,
  // creator: creatorReducer,
});
