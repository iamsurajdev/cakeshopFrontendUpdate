import React from "react";
import classes from "./Card.module.css";
import ImageHelper from "./ImageHelper/ImageHelper";
import * as action from "../../../Redux/Actions/index";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../Cart/CartHelper/CartHelper";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Card = (props) => {
  const addToCart = () => {
    if (props.isAuthenticated) {
      addItemToCart(props.product);
    } else {
      alert("you are not login");
    }
  };

  const showAddToCart = () => {
    return props.addtoCart && <button onClick={addToCart}>Add to Cart</button>;
  };

  const showRemoveFromCart = () => {
    return (
      props.removeFromCart && (
        <button
          onClick={() => {
            removeItemFromCart(props.product._id);
            props.onRemoveItemReload();
          }}
        >
          Remove from cart
        </button>
      )
    );
  };
  const updateProduct = () => {
    return (
      props.updateProduct && (
        <Link to="/admin/dashboard/updateProduct">
          <button
            onClick={() => {
              props.setIdForUpdateProduct(props.product._id);
            }}
          >
            Update Product
          </button>
        </Link>
      )
    );
  };
  const deleteProduct = () => {
    return (
      props.deleteProduct && (
        <button
          onClick={() => {
            const userId = localStorage.getItem("userId");
            const token = localStorage.getItem("token");
            props.onDeleteProduct(props.product._id, userId, token);
          }}
        >
          Delete Product
        </button>
      )
    );
  };

  return (
    <div className={classes.card}>
      <ImageHelper id={props.product._id} />
      <p>
        <strong>Name:</strong> {props.product.name}
      </p>
      <p>
        <strong> Price:</strong> ${props.product.price}
      </p>
      <p>
        <strong>Description: </strong> {props.product.description}
      </p>

      {showAddToCart()}
      {showRemoveFromCart()}
      {updateProduct()}
      {deleteProduct()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveItemReload: () => dispatch(action.reloadCart()),
    setIdForUpdateProduct: (id) => dispatch(action.setIdForUpdateProduct(id)),
    onDeleteProduct: (productId, userId, token) =>
      dispatch(action.productDelete(productId, userId, token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
