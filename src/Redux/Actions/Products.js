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

export const productFetchNotNeeded = () => {
  return {
    type: actionTypes.PRODUCT_FETCH_NOT_NEEDED,
  };
};

export const productFetch = (product) => {
  return (dispatch) => {
    dispatch(productFetchStart());
    if (product.length > 0) {
      dispatch(productFetchNotNeeded());
    } else {
      axios
        .get("/products")
        .then((response) => {
          console.log(response);

          dispatch(productFetchSuccess(response.data));
        })
        .catch((err) => {
          console.log(err);
          dispatch(productFetchFail(err));
        });
    }
  };
};
