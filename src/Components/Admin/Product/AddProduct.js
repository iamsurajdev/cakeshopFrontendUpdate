import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import BaseComponent from "../../BaseComponent/BaseComponent";
import * as action from "../../../Redux/Actions/index";
import axios from "../../../axios-orders";
const AddProduct = (props) => {
  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    photo: "",

    category: "",
    error: "",
    createdProduct: "",
    formData: "",
  });

  useEffect(() => {
    props.onInitCategory();
    setValues({ ...values, formData: new FormData() });
  }, []);

  const onSubmit = (event) => {
    console.log("ONSUBMIT");
    console.log(formData);

    event.preventDefault();
    setValues({ ...values, error: "", loading: true });
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    axios
      .post(`/product/create/${userId}`, formData, {
        headers: {
          token: token,
        },
      })
      .then((response) => {
        console.log(response);

        if (response.data.error) {
          setValues({ ...values, error: response.data.error });
        } else {
          setValues({
            ...values,
            name: "",
            description: "",
            price: "",
            photo: "",
            stock: "",
            loading: false,
            createdProduct: response.data.name,
          });
        }
      });
  };

  const {
    name,
    description,
    price,
    stock,

    category,
    error,
    createdProduct,
    formData,
  } = values;

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const massage = () => (
    <div style={{ display: createdProduct ? "" : "none" }}>
      <h4>{createdProduct} created successfully</h4>
    </div>
  );

  return (
    <BaseComponent>
      {massage()}
      <form>
        <div>
          <input
            onChange={handleChange("photo")}
            type="file"
            name="Photo"
            accept="image"
          />
        </div>
        <div>
          <input
            onChange={handleChange("name")}
            name="name"
            placeholder="Name"
            value={name}
          />
        </div>
        <div>
          <textarea
            onChange={handleChange("description")}
            name="description"
            placeholder="Description"
            value={description}
          />
        </div>
        <div>
          <input
            onChange={handleChange("price")}
            name="price"
            type="number"
            placeholder="Price"
            value={price}
          />
        </div>
        <div>
          <select onChange={handleChange("category")} placeholder="Category">
            <option>Select</option>
            {props.categories &&
              props.categories.map((cate, index) => (
                <option key={index} value={cate._id}>
                  {cate.name}
                </option>
              ))}
          </select>
        </div>
        <div>
          <input
            onChange={handleChange("stock")}
            name="stock"
            placeholder="Stock"
            value={stock}
          />
        </div>

        <button onClick={onSubmit}>Submit</button>
      </form>
    </BaseComponent>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.category.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitCategory: () => dispatch(action.categoryFetch()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
