import React from "react";
import { connect } from "react-redux";
import * as action from "../../../Redux/Actions/index";

const Logout = (props) => {
  return (
    <div>
      <button>Logout</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    isAuthenticatedCheck: () => dispatch(action.checkAuthStatus()),
  };
};
export default connect(null, mapDispatchToProps)(Logout);
