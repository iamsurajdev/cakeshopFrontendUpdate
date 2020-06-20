import axios from "../../axios-orders";
import * as actionTypes from "./actionTypes";

export const categoryFetchStart = () => {
  return {
    type: actionTypes.ADD_CATEGORY_START,
  };
};

export const categoryFetchSuccess = () => {
  return {
    type: actionTypes.ADD_CATEGORY_SUCCESS,
  };
};

export const categoryFetchFail = (error) => {
  return {
    type: actionTypes.ADD_CATEGORY_FAIL,
    error: error,
  };
};

export const categoryFetch = (categoryName, userId, token) => {
  return (dispatch) => {
    dispatch(categoryFetchStart());
    axios
      .post(`/category/create/${userId}`, categoryName, {
        headers: {
          token: `${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.data.error) {
          dispatch(categoryFetchFail(response.data.error));
        } else {
          dispatch(categoryFetchSuccess());
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(categoryFetchFail(err));
      });
  };
};
