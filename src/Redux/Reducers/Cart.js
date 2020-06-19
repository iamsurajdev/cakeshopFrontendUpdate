import * as actionType from "../Actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  reload: false,
};

const reloadCart = (state, action) => {
  return updateObject(state, {
    reload: !state.reload,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.CART_RELOADED:
      return reloadCart(state, action);

    default:
      return state;
  }
};

export default reducer;
