import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import { connect } from "react-redux";
import * as action from "../../Redux/Actions/index";

const Home = (props) => {
  const logoutHelper = () => {
    localStorage.clear();
    props.isAuthenticatedCheck();
  };

  return (
    <div>
      <Header />
      <button>
        <Link to="/register">Register</Link>
      </button>
      <button>
        <Link to="/login">Login</Link>
      </button>

      <button onClick={logoutHelper}>Logout</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    isAuthenticatedCheck: () => dispatch(action.checkAuthStatus()),
  };
};

export default connect(null, mapDispatchToProps)(Home);
