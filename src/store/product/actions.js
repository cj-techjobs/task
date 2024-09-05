export const SET_PRODUCTS = "SET_PRODUCTS";
export const SET_CART = "SET_CART";


export const setProducts = (payload) => ({
  type: SET_PRODUCTS,
  payload,
});

export const setCart = (payload) => ({
  type: SET_CART,
  payload,
});

