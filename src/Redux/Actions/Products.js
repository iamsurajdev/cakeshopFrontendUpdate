import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const productFetchStart = () => {
  return {
    type: actionTypes.PRODUCT_FETCH_START,
  };
};

export const productFetchSuccess = (prod) => {
  return {
    type: actionTypes.PRODUCT_FETCH_SUCCESS,
    product: prod,
  };
};

export const productFetchFail = (error) => {
  return {
    type: actionTypes.PRODUCT_FETCH_FAIL,
    error: error,
  };
};

export const productFetch = () => {
  return (dispatch) => {
    dispatch(productFetchStart());
    axios
      .get("/products")
      .then((response) => {
        console.log(response);

        dispatch(productFetchSuccess(response.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(productFetchFail(err.response.data.error));
      });
  };
};
