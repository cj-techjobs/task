export const PRODUCT_DETAILS_SUCCESS = "PRODUCT_DETAILS_SUCCESS";
export const RELATED_PRODUCTS_SUCCESS = "RELATED_PRODUCTS_SUCCESS";
export const CURRENT_PRODUCTID_SUCCESS = "CURRENT_PRODUCTID_SUCCESS";
export const ADD_TO_CART_SUCCESS = "ADD_TO_CART_SUCCESS";
export const ADD_TO_FAVOURITES_SUCCESS = "ADD_TO_FAVOURITES_SUCCESS";

export const setProductDetails = (payload) => ({
  type: PRODUCT_DETAILS_SUCCESS,
  payload,
});

export const setRelatedProducts = (payload) => ({
  type: RELATED_PRODUCTS_SUCCESS,
  payload,
});

export const setCurrentProductId = (payload) => ({
  type: CURRENT_PRODUCTID_SUCCESS,
  payload,
});
export const addProductToCart = (payload) => ({
  type: ADD_TO_CART_SUCCESS,
  payload,
});
export const addProductToFavourites = (payload) => ({
  type: ADD_TO_FAVOURITES_SUCCESS,
  payload,
});
