import React, { useState } from "react";
import { connect } from "react-redux";
import BaseComponent from "../../BaseComponent/BaseComponent";
import * as action from "../../../Redux/Actions/index";
const AddCategory = (props) => {
  const [category, setCategory] = useState({
    name: "",
  });

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    props.onSubmitCategory(category, userId, token);
  };

  const handleChange = (event) => {
    setCategory({ name: event.target.value });
  };

  return (
    <BaseComponent>
      <h1>Create Category</h1>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Category Name"
          onChange={handleChange}
          value={category.name}
        />
        <button>Submit</button>
      </form>
    </BaseComponent>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitCategory: (category, userId, token) =>
      dispatch(action.categoryFetch(category, userId, token)),
  };
};

export default connect(null, mapDispatchToProps)(AddCategory);
