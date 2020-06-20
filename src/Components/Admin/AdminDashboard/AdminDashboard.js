import React from "react";
import BaseComponent from "../../BaseComponent/BaseComponent";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <BaseComponent>
      <h1>Admin Dashboard</h1>
      <div>
        <ul>
          <li>
            <Link to="/admin/dashboard/addCategory">Create Category</Link>
          </li>
          <li>
            <Link to="/admin/dashboard/manageCategory">Manage Category</Link>
          </li>
          <li>
            <Link to="/admin/dashboard/addProduct">Create Product</Link>
          </li>
          <li>
            <Link to="/admin/dashboard/manageProduct">Manage Product</Link>
          </li>
        </ul>
      </div>
    </BaseComponent>
  );
};

export default AdminDashboard;
