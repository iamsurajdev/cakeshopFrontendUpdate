import React from "react";
import { Link } from "react-router-dom";
import Logout from "../../Auth/Logout/Logout";
import classes from "./Header.module.css";
const Header = () => {
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
          <Link to="/register">Register</Link>
        </li>
        <li className={classes.navItem}>
          <Link to="/login">Login</Link>
        </li>
        <li className={classes.navItem}>
          <Logout />
        </li>
      </nav>
    </div>
  );
};

export default Header;
