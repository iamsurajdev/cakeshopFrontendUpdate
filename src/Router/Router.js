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
import AdminRoutes from "./AdminRoutes";
import PrivetRoutes from "./PrivetRoutes";
import AddCategory from "../Components/Admin/Category/AddCategory";
import ManageCategory from "../Components/Admin/Category/ManageCategory";
import UpdateCategory from "../Components/Admin/Category/UpdateCategory";
import AddProduct from "../Components/Admin/Product/AddProduct";
import ManageProduct from "../Components/Admin/Product/ManageProduct";
import UpdateProduct from "../Components/Admin/Product/UpdateProduct";

const Router = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/products" exact component={Allproducts} />
        <PrivetRoutes path="/cart" exact component={Cart} />
        <PrivetRoutes path="/user/dashboard" exact component={UserDashboard} />
        <AdminRoutes path="/admin/dashboard" exact component={AdminDashboard} />
        <AdminRoutes
          path="/admin/dashboard/addCategory"
          exact
          component={AddCategory}
        />
        <AdminRoutes
          path="/admin/dashboard/manageCategory"
          exact
          component={ManageCategory}
        />
        <AdminRoutes
          path="/admin/dashboard/updateCategory"
          exact
          component={UpdateCategory}
        />
        <AdminRoutes
          path="/admin/dashboard/addProduct"
          exact
          component={AddProduct}
        />
        <AdminRoutes
          path="/admin/dashboard/manageProduct"
          exact
          component={ManageProduct}
        />
        <AdminRoutes
          path="/admin/dashboard/updateProduct"
          exact
          component={UpdateProduct}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
