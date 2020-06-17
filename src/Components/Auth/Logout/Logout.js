import React from "react";
import { connect } from "react-redux";
import * as action from "../../../Redux/Actions/index";
import Button from "../../UI/Button/Button";

const Logout = (props) => {
  const logoutHelper = () => {
    localStorage.clear();
    props.isAuthenticatedCheck();
  };

  return <Button onClick={logoutHelper}>Logout</Button>;
};

const mapDispatchToProps = (dispatch) => {
  return {
    isAuthenticatedCheck: () => dispatch(action.checkAuthStatus()),
  };
};
export default connect(null, mapDispatchToProps)(Logout);
