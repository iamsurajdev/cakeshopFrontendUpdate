import axios from "../../axios-orders";
import * as actionTypes from "./actionTypes";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (user) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    user: user,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const auth = (name, email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    let authData = {
      name: name,
      email: email,
      password: password,
    };

    let url = "/register";
    if (!name) {
      console.log("url changed in actions");

      url = "/login";
      authData = {
        email: email,
        password: password,
      };
    }

    axios
      .post(url, authData)
      .then((response) => {
        console.log(response);
        if (response.data.msg) {
          dispatch(authFail(response.data.msg));
        } else {
          if (response.data.error) {
            dispatch(authFail(response.data.error));
          } else {
            dispatch(authSuccess(response.data));
          }
        }

        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.id);
        dispatch(checkAuthStatus());
      })
      .catch((err) => {
        console.log(err);
        dispatch(authFail(err.response.data.error));
      });
  };
};

export const authStatus = (status) => {
  return {
    type: actionTypes.AUTH_STATUS,
    isAuthenticated: status,
  };
};

export const checkAuthStatus = () => {
  return (dispatch) => {
    if (localStorage.getItem("token")) {
      dispatch(authStatus(true));
    }
    if (localStorage.getItem("token") === null) {
      dispatch(authStatus(false));
    }
  };
};
