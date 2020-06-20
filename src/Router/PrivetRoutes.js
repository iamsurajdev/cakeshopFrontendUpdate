import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivetRoutes = (props) => {
  const helper = () => {
    if (props.isAuthenticated) {
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
  };
};

export default connect(mapStateToProps)(PrivetRoutes);
