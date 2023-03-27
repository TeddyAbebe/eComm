import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constant";

export const addToCart = (data) => {
  console.log("addToCart action is called", data);
  return {
    type: ADD_TO_CART,
    data,
  };
};

export const removeFromCart = (data) => {
  console.log("removeFromCart action is called", data);
  return {
    type: REMOVE_FROM_CART,
    data,
  };
};

export const emptyCart = () => {
  console.log("emptyCart action is called");
  return {
    type: EMPTY_CART,
  };
};
