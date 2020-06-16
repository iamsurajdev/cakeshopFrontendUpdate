import * as actionType from "../Actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  user: {},
  error: null,
  isAuthenticated: false,
};

const authStart = (state, action) => {
  return updateObject(state, {
    error: null,
  });
};
const authSuccess = (state, action) => {
  return updateObject(state, {
    user: action.user,
    error: null,
  });
};
const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
  });
};
const authStatus = (state, action) => {
  return updateObject(state, {
    isAuthenticated: action.isAuthenticated,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.AUTH_START:
      return authStart(state, action);
    case actionType.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionType.AUTH_FAIL:
      return authFail(state, action);
    case actionType.AUTH_STATUS:
      return authStatus(state, action);

    default:
      return state;
  }
};

export default reducer;
