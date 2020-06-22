import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import BaseComponent from "../../BaseComponent/BaseComponent";
import * as action from "../../../Redux/Actions/index";
import axios from "../../../axios-orders";
const UpdateCategory = (props) => {
  const [category, setCategory] = useState({
    id: "",
    name: "",
  });

  console.log(category);

  const stateHandler = (id) => {
    axios.get(`/category/${id}`).then((response) => {
      if (response.data.error) {
        console.log(response.data.error);
      } else {
        setCategory({ name: response.data.name, id: response.data._id });
      }
    });
  };

  useEffect(() => {
    stateHandler(props.idForUpdate);
  }, []);

  const { id, name } = category;

  const handleChange = (event) => {
    setCategory({ ...category, name: event.target.value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.onUpdate(id, name);
  };
  return (
    <BaseComponent>
      <form onSubmit={onSubmitHandler}>
        <input type="text" value={name} onChange={handleChange} />
        <button>Update</button>
      </form>
    </BaseComponent>
  );
};

const mapStateToProps = (state) => {
  return {
    idForUpdate: state.category.idForUpdate,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdate: (id, name) => dispatch(action.categoryUpdate(id, name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateCategory);
