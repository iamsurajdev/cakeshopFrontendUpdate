import React, { Component } from "react";
import Router from "./Router";
import { connect } from "react-redux";
import * as action from "./Redux/Actions/index";

class App extends Component {
  componentDidMount() {
    this.props.isAuthenticatedCheck();
  }

  render() {
    return <Router />;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    isAuthenticatedCheck: () => dispatch(action.checkAuthStatus()),
  };
};

export default connect(null, mapDispatchToProps)(App);
