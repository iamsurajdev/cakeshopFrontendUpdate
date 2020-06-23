import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import BaseComponent from "../../BaseComponent/BaseComponent";
import * as action from "../../../Redux/Actions/index";
import axios from "../../../axios-orders";

const UpdateProduct = (props) => {
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

  const preload = () => {
    axios.get(`/product/${props.idForUpdate}`).then((response) => {
      console.log(response);

      if (response.data.error) {
        setValues({ ...values, error: response.data.error });
      } else {
        setValues({
          ...values,
          name: response.data.name,
          description: response.data.description,
          price: response.data.price,
          category: response.data.category,
          stock: response.data.stock,
          formData: new FormData(),
        });
      }
    });
  };

  useEffect(() => {
    preload();
    props.onInitCategory();
  }, []);

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

  const onSubmit = (event) => {
    console.log("ENTER IN UPDATE PRODUCT");

    event.preventDefault();
    setValues({ ...values, error: "", loading: true });
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    axios
      .put(`/product/${props.idForUpdate}/${userId}`, formData, {
        headers: {
          token: token,
        },
      })
      .then((data) => {
        console.log(data);

        if (data.error) {
          setValues({ ...values, error: data.error });
        } else {
          setValues({
            ...values,
            name: "",
            description: "",
            price: "",
            photo: "",
            stock: "",
            loading: false,
            createdProduct: data.name,
          });
        }
      });
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
    idForUpdate: state.products.idForUpdate,
    categories: state.category.categories,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onInitCategory: () => dispatch(action.categoryFetch()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProduct);
