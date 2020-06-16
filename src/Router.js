import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, withRouter, Redirect } from "react-router-dom";
import Home from "./Components/home/Home";
import Login from "./Components/Auth/Login/Login";
import Register from "./Components/Auth/Register/Register";

const Router = (props) => {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </BrowserRouter>
  );
};

export default Router;
