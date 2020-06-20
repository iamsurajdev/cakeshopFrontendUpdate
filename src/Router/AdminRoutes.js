import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const AdminRoute = (props) => {
  const helper = () => {
    if (props.isAuthenticated && props.role > 0) {
      return <Route path={props.path} component={props.component} />;
    } else {
      return (
        <Redirect
          to={{
            pathname: "/login",
          }}
        />
      );
    }
  };

  return helper();
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    role: state.auth.user.role,
  };
};

export default connect(mapStateToProps)(AdminRoute);
