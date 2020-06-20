import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import Home from "../Components/Home/Home";
import Login from "../Components/Auth/Login/Login";
import Register from "../Components/Auth/Register/Register";
import Allproducts from "../Components/Allproducts/Allproducts";
import Cart from "../Components/Cart/Cart";
import AdminDashboard from "../Components/Admin/AdminDashboard/AdminDashboard";
import UserDashboard from "../Components/User/UserDashboard/UserDashboard";

const Router = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/products" exact component={Allproducts} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/adminDashboard" exact component={AdminDashboard} />
        <Route path="/userDashboard" exact component={UserDashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
