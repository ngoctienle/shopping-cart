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
  switch (action.type) {
    case types.BUY_PRODUCT:
      let { product, quantity } = action;
      let position = getProductPosition(state, product);

      if (position > -1) {
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
      return state;
    case types.REMOVE_PRODUCT:
      return state;
    default:
      return state;
  }
};
export default carts;
