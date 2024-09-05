import { SET_PRODUCTS } from "./actions";
import { SET_CART } from "./actions";

const initialState = {
  products: [],
  cart:[]
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.payload };
    case SET_CART:
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};
