import React, { useEffect } from "react";
import { connect } from "react-redux";
import BaseComponent from "../../BaseComponent/BaseComponent";
import * as action from "../../../Redux/Actions/index";
import { Link, Redirect } from "react-router-dom";

const ManageCategory = (props) => {
  useEffect(() => {
    props.onInitCategory();
  }, []);

  const deleteCategoryHandler = (id) => {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    props.onDeleteCategory(id, userId, token);
  };

  return (
    <BaseComponent>
      {props.categories &&
        props.categories.map((category, index) => {
          return (
            <div key={index}>
              <li>{category.name}</li>
              <Link to="/admin/dashboard/updateCategory">
                <button
                  onClick={() => {
                    props.onUpdateButtonClick(category._id);
                  }}
                >
                  update
                </button>
              </Link>
              <button
                onClick={() => {
                  deleteCategoryHandler(category._id);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
    </BaseComponent>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.category.categories,
    category: state.category.category,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitCategory: () => dispatch(action.categoryFetch()),
    onUpdateButtonClick: (categoryId) =>
      dispatch(action.setIdForUpdate(categoryId)),
    onDeleteCategory: (categoryId, userId, token) =>
      dispatch(action.categoryDelete(categoryId, userId, token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCategory);
