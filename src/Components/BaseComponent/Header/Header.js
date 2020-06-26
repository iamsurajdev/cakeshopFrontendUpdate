import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import { connect } from "react-redux";
import * as action from "../../../Redux/Actions/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  const logoutHelper = () => {
    localStorage.clear();
    props.isAuthenticatedCheck();
  };

  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <Link to="/">
          <FontAwesomeIcon icon={faBirthdayCake} />
        </Link>
      </div>
      <nav className={classes.navigation}>
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
            <Link to="/admin/dashboard">Admin Dashboard</Link>
          </li>
        )}

        {props.isAuthenticated && (
          <li className={classes.navItem}>
            <Link to="/user/dashboard">User Dashboard</Link>
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
