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

    axios
      .get("/products")
      .then((response) => {
        console.log(response);
        if (product !== response.data) {
          dispatch(productFetchSuccess(response.data));
        } else {
          dispatch(productFetchNotNeeded());
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(productFetchFail(err));
      });
  };
};

//this part for deleting data

export const productDeleteStart = () => {
  return {
    type: actionTypes.PRODUCT_DELETE_START,
  };
};
export const productDeleteSuccess = (id) => {
  return {
    type: actionTypes.PRODUCT_DELETE_SUCCESS,
    id: id,
  };
};

export const productDeleteFail = (error) => {
  return {
    type: actionTypes.PRODUCT_DELETE_FAIL,
    error: error,
  };
};

export const productDelete = (productId, userId, token) => {
  return (dispatch) => {
    dispatch(productDeleteStart());
    axios
      .delete(`/product/${productId}/${userId}`, {
        headers: {
          token: token,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.data.error) {
          dispatch(productDeleteFail(response.data.error));
        } else {
          dispatch(productDeleteSuccess(response.data.deletedProduct._id));
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(productDeleteFail(err));
      });
  };
};

export const setIdForUpdateProduct = (id) => {
  return {
    type: actionTypes.SET_ID_FOR_UPDATE_PRODUCT,
    id: id,
  };
};
