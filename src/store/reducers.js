import { combineReducers } from "redux";
import { authReducer } from "./auth";
// import { creatorReducer } from "./creator";
import { productsReducer } from "./products";
import { productReducer } from "./product";

export default combineReducers({
  auth: authReducer,
  products: productsReducer,
  product: productReducer,
  // creator: creatorReducer,
});
