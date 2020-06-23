import * as actionType from "../Actions/actionTypes";
import { updateObject } from "../utility";
import { productDelete } from "../Actions";

const initialState = {
  products: [],
  error: false,
  reload: true,
  idForUpdate: null,
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
const productDeleteStart = (state, action) => {
  return updateObject(state, {
    error: false,
  });
};
const productDeleteSuccess = (state, action) => {
  return updateObject(state, {
    error: false,
    products: [],
    reload: !state.reload,
  });
};
const productDeleteFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
  });
};

const setIdFroUpdate = (state, action) => {
  return updateObject(state, {
    idForUpdate: action.id,
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

    case actionType.PRODUCT_DELETE_START:
      return productDeleteStart(state, action);

    case actionType.PRODUCT_DELETE_SUCCESS:
      return productDeleteSuccess(state, action);

    case actionType.PRODUCT_DELETE_FAIL:
      return productDeleteFail(state, action);

    case actionType.SET_ID_FOR_UPDATE_PRODUCT:
      return setIdFroUpdate(state, action);

    default:
      return state;
  }
};

export default reducer;
