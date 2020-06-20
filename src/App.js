import React, { Component } from "react";
import Router from "./Router/Router";
import { connect } from "react-redux";
import * as action from "./Redux/Actions/index";

class App extends Component {
  componentDidMount() {
    this.initialize();
  }

  initialize() {
    console.log("initialize executed");

    if (localStorage.getItem("userId") && localStorage.getItem("token")) {
      let userId = localStorage.getItem("userId");
      let token = localStorage.getItem("token");
      this.props.storeUserIfLoggedIn(userId, token);
    }
  }

  render() {
    return <Router />;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    isAuthenticatedCheck: () => dispatch(action.checkAuthStatus()),
    storeUserIfLoggedIn: (id, token) =>
      dispatch(action.fetchUserIfLoggedIn(id, token)),
  };
};

export default connect(null, mapDispatchToProps)(App);
