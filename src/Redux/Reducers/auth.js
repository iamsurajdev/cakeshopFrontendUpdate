import * as actionType from "../Actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  user: {
    id: "",
    role: "",
    name: "",
    email: "",
  },
  error: null,
  isAuthenticated: false,
};

const authStart = (state, action) => {
  return updateObject(state, {
    error: null,
  });
};
const authSuccess = (state, action) => {
  console.log(action);
  const newUser = updateObject(state.user, {
    id: action.id,
    role: action.role,
    name: action.name,
    email: action.email,
  });
  return updateObject(state, {
    user: newUser,
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
const clearAuthErrorOnInit = (state, action) => {
  return updateObject(state, {
    error: action.error,
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
    case actionType.CLEAR_ERROR_ON_INIT:
      return clearAuthErrorOnInit(state, action);

    default:
      return state;
  }
};

export default reducer;
