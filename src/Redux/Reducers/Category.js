import * as actionType from "../Actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  categories: [],
  idForUpdate: null,
  error: null,
};

const categoryPostStart = (state, action) => {
  return updateObject(state, {
    error: null,
  });
};
const categoryPostSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
  });
};
const categoryPostFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
  });
};
const categoryFetchStart = (state, action) => {
  return updateObject(state, {
    error: null,
  });
};
const categoryFetchSuccess = (state, action) => {
  return updateObject(state, {
    categories: action.category,
    error: null,
  });
};
const categoryFetchFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
  });
};
const categoryDeleteStart = (state, action) => {
  return updateObject(state, {
    error: null,
  });
};
const categoryDeleteSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
  });
};
const categoryDeleteFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
  });
};

const setIdFroUpdate = (state, action) => {
  return updateObject(state, {
    idForUpdate: action.id,
  });
};

const categoryUpdateStart = (state, action) => {
  return updateObject(state, {
    error: null,
  });
};
const categoryUpdateSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
  });
};
const categoryUpdateFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_CATEGORY_START:
      return categoryPostStart(state, action);

    case actionType.ADD_CATEGORY_SUCCESS:
      return categoryPostSuccess(state, action);

    case actionType.ADD_CATEGORY_FAIL:
      return categoryPostFail(state, action);

    case actionType.CATEGORY_FETCH_START:
      return categoryFetchStart(state, action);

    case actionType.CATEGORY_FETCH_SUCCESS:
      return categoryFetchSuccess(state, action);

    case actionType.CATEGORY_FETCH_FAIL:
      return categoryFetchFail(state, action);

    case actionType.CATEGORY_DELETE_START:
      return categoryDeleteStart(state, action);

    case actionType.CATEGORY_DELETE_SUCCESS:
      return categoryDeleteSuccess(state, action);

    case actionType.CATEGORY_DELETE_FAIL:
      return categoryDeleteFail(state, action);

    case actionType.SET_ID_FOR_UPDATE:
      return setIdFroUpdate(state, action);

    case actionType.CATEGORY_UPDATE_START:
      return categoryUpdateStart(state, action);

    case actionType.CATEGORY_UPDATE_SUCCESS:
      return categoryUpdateSuccess(state, action);

    case actionType.CATEGORY_UPDATE_FAIL:
      return categoryUpdateFail(state, action);

    default:
      return state;
  }
};

export default reducer;
