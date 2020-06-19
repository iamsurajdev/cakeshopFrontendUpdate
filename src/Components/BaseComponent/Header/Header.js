import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import { connect } from "react-redux";
import * as action from "../../../Redux/Actions/index";

const Header = (props) => {
  const logoutHelper = () => {
    localStorage.clear();
    props.isAuthenticatedCheck();
  };
  return (
    <div className={classes.header}>
      <nav className={classes.navigation}>
        <li className={classes.navItem}>
          <Link to="/">Home</Link>
        </li>
        <li className={classes.navItem}>
          <Link to="/products">Products</Link>
        </li>
        <li className={classes.navItem}>
          <Link to="/cart">Cart</Link>
        </li>
        <li className={classes.navItem}>
          <Link to="/register">Register</Link>
        </li>
        <li className={classes.navItem}>
          <Link to="/login">Login</Link>
        </li>
        <li className={classes.navItem}>
          <a onClick={logoutHelper}>Logout</a>
        </li>
      </nav>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    isAuthenticatedCheck: () => dispatch(action.checkAuthStatus()),
  };
};

export default connect(null, mapDispatchToProps)(Header);
