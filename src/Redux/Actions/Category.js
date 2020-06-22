import axios from "../../axios-orders";
import * as actionTypes from "./actionTypes";

//this part for posting data

export const categoryPostStart = () => {
  return {
    type: actionTypes.ADD_CATEGORY_START,
  };
};

export const categoryPostSuccess = () => {
  return {
    type: actionTypes.ADD_CATEGORY_SUCCESS,
  };
};

export const categoryPostFail = (error) => {
  return {
    type: actionTypes.ADD_CATEGORY_FAIL,
    error: error,
  };
};

export const categoryPost = (categoryName, userId, token) => {
  return (dispatch) => {
    dispatch(categoryPostStart());
    axios
      .post(`/category/create/${userId}`, categoryName, {
        headers: {
          token: `${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.data.error) {
          dispatch(categoryPostFail(response.data.error));
        } else {
          dispatch(categoryPostSuccess());
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(categoryPostFail(err));
      });
  };
};

//this part for fetching data

export const categoryFetchStart = () => {
  return {
    type: actionTypes.CATEGORY_FETCH_START,
  };
};

export const categoryFetchSuccess = (category) => {
  return {
    type: actionTypes.CATEGORY_FETCH_SUCCESS,
    category: category,
  };
};

export const categoryFetchFail = (error) => {
  return {
    type: actionTypes.CATEGORY_FETCH_FAIL,
    error: error,
  };
};

export const categoryFetch = () => {
  return (dispatch) => {
    dispatch(categoryFetchStart());
    axios
      .get("/categories")
      .then((response) => {
        console.log(response);
        if (response.data.error) {
          dispatch(categoryFetchFail(response.data.error));
        } else {
          dispatch(categoryFetchSuccess(response.data));
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(categoryFetchFail(err));
      });
  };
};

//this part for deleting data

export const categoryDeleteStart = () => {
  return {
    type: actionTypes.CATEGORY_DELETE_START,
  };
};
export const categoryDeleteSuccess = () => {
  return {
    type: actionTypes.CATEGORY_DELETE_SUCCESS,
  };
};

export const categoryDeleteFail = (error) => {
  return {
    type: actionTypes.CATEGORY_DELETE_FAIL,
    error: error,
  };
};

export const categoryDelete = (categoryId, userId, token) => {
  return (dispatch) => {
    dispatch(categoryDeleteStart());
    axios
      .delete(`/category/${categoryId}/${userId}`, {
        headers: {
          token: token,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.data.error) {
          dispatch(categoryDeleteFail(response.data.error));
        } else {
          dispatch(categoryDeleteSuccess());
          dispatch(categoryFetch());
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(categoryDeleteFail(err));
      });
  };
};

//this part for set id for updating updating

export const setIdForUpdate = (categoryId) => {
  return {
    type: actionTypes.SET_ID_FOR_UPDATE,
    id: categoryId,
  };
};

//this part for updating category

export const categoryUpdateStart = () => {
  return {
    type: actionTypes.CATEGORY_UPDATE_START,
  };
};

export const categoryUpdateSuccess = () => {
  return {
    type: actionTypes.CATEGORY_UPDATE_SUCCESS,
  };
};

export const categoryUpdateFail = (error) => {
  return {
    type: actionTypes.CATEGORY_UPDATE_FAIL,
    error: error,
  };
};

export const categoryUpdate = (categoryId, CategoryName) => {
  return (dispatch) => {
    dispatch(categoryUpdateStart());
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    axios
      .put(
        `/category/${categoryId}/${userId}`,
        { name: CategoryName },
        {
          headers: {
            token: token,
          },
        }
      )
      .then((response) => {
        console.log(response);
        if (response.data.error) {
          dispatch(categoryUpdateFail(response.data.error));
        } else {
          dispatch(categoryUpdateSuccess());
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(categoryUpdateFail(err));
      });
  };
};
