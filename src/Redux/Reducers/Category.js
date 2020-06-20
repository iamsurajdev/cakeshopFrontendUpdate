import * as actionType from "../Actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  error: null,
};

const categoryFetchStart = (state, action) => {
  return updateObject(state, {
    error: null,
  });
};
const categoryFetchSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
  });
};
const categoryFetchFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_CATEGORY_START:
      return categoryFetchStart(state, action);
    case actionType.ADD_CATEGORY_SUCCESS:
      return categoryFetchSuccess(state, action);
    case actionType.ADD_CATEGORY_FAIL:
      return categoryFetchFail(state, action);

    default:
      return state;
  }
};

export default reducer;
