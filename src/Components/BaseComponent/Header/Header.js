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
        {props.isAuthenticated && (
          <li className={classes.navItem}>
            <Link to="/cart">Cart</Link>
          </li>
        )}
        {props.isAuthenticated && props.role > 0 && (
          <li className={classes.navItem}>
            <Link to="/adminDashboard">Admin Dashboard</Link>
          </li>
        )}

        {props.isAuthenticated && (
          <li className={classes.navItem}>
            <Link to="/userDashboard">User Dashboard</Link>
          </li>
        )}
        {!props.isAuthenticated && (
          <li className={classes.navItem}>
            <Link to="/register">Register</Link>
          </li>
        )}
        {!props.isAuthenticated && (
          <li className={classes.navItem}>
            <Link to="/login">Login</Link>
          </li>
        )}

        {props.isAuthenticated && (
          <li className={classes.navItem}>
            <a onClick={logoutHelper}>Logout</a>
          </li>
        )}
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    role: state.auth.user.role,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    isAuthenticatedCheck: () => dispatch(action.checkAuthStatus()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
