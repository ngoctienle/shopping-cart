import { remove } from "lodash";

import * as types from "./../constants/ActionType";
import * as configs from "./../constants/Config";

let defaultState = [];
let cartItems = JSON.parse(
  localStorage.getItem(configs.CART_FROM_LOCAL_STORAGE)
);
defaultState =
  cartItems !== null && cartItems.length > 0 ? cartItems : defaultState;

let getProductPosition = (cartItems, product) => {
  let total = cartItems.length;
  for (let i = 0; i < total; i++) {
    if (cartItems[i].product.id === product.id) return i;
  }
  return -1;
};

const carts = (state = defaultState, action) => {
  let { product, quantity } = action;
  let position = -1;

  switch (action.type) {
    case types.BUY_PRODUCT:
      position = getProductPosition(state, product);

      if (position > -1) {
        //EDIT
        state[position].quantity += quantity;
      } else {
        state.push({ product, quantity });
      }

      localStorage.setItem(
        configs.CART_FROM_LOCAL_STORAGE,
        JSON.stringify(state)
      );

      return [...state];

    case types.UPDATE_PRODUCT:
      position = getProductPosition(state, product);

      if (position > -1) {
        //UPDATE
        state[position].quantity = quantity;
      }

      localStorage.setItem(
        configs.CART_FROM_LOCAL_STORAGE,
        JSON.stringify(state)
      );
      return [...state];

    case types.REMOVE_PRODUCT:
      remove(state, (cartItem) => {
        return cartItem.product.id === product.id;
      });
      return [...state];
    default:
      return state;
  }
};
export default carts;
