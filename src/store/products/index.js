import {
  ADD_TO_CART_SUCCESS,
  ADD_TO_FAVOURITES_SUCCESS,
  CURRENT_PRODUCTID_SUCCESS,
  PRODUCT_DETAILS_SUCCESS,
  RELATED_PRODUCTS_SUCCESS,
} from "./actions";

const initialState = {
  productDetails: {},
  relatedProducts: [],
  currentProductId: "66d319fae2303d9c7b61f3eb",
  cart: [],
  favourites: [],
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_SUCCESS:
      return { ...state, productDetails: action.payload };
    case RELATED_PRODUCTS_SUCCESS:
      return { ...state, relatedProducts: action.payload };
    case CURRENT_PRODUCTID_SUCCESS:
      return { ...state, currentProductId: action.payload };
    case ADD_TO_CART_SUCCESS:
      const isAdded = state.cart.find((id) => id === action.payload);
      return {
        ...state,
        cart: isAdded
          ? state.cart.filter((id) => id !== action.payload)
          : [...state.cart, action.payload],
      };
    case ADD_TO_FAVOURITES_SUCCESS:
      const isFavourite = state.favourites?.find((id) => id === action.payload);
      return {
        ...state,
        favourites: isFavourite
          ? state.favourites.filter((id) => id !== action.payload)
          : [...state.favourites, action.payload],
      };
    default:
      return state;
  }
};
