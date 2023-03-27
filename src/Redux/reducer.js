import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constant";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("ADD_TO_CART reducer is called ", action);
      return [action.data, ...data];
    case REMOVE_FROM_CART:
      console.log("REMOVE_FROM_CART reducer is called", action);
      // data.length = data.length ? data.length - 1 : [];
      const remainItems = data.filter((item) => item.id !== action.data);
      return [...remainItems];
    case EMPTY_CART:
      console.log("EMPTY_CART reducer is called", action);
      data = [];
      return [...data];
    default:
      return data;
  }
};
