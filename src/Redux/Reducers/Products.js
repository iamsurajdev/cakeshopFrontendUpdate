import * as actionType from "../Actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  products: [],
  error: false,
};

const productFetchStart = (state, action) => {
  return updateObject(state, {
    error: null,
  });
};
const productFetchNotNeeded = (state, action) => {
  return updateObject(state, {
    error: null,
  });
};
const productFetchSuccess = (state, action) => {
  return updateObject(state, {
    products: state.products.concat(action.product),
  });
};
const productFetchFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.PRODUCT_FETCH_START:
      return productFetchStart(state, action);
    case actionType.PRODUCT_FETCH_SUCCESS:
      return productFetchSuccess(state, action);
    case actionType.PRODUCT_FETCH_FAIL:
      return productFetchFail(state, action);
    case actionType.PRODUCT_FETCH_NOT_NEEDED:
      return productFetchNotNeeded(state, action);
    default:
      return state;
  }
};

export default reducer;
