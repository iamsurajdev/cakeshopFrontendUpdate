import React, { useState } from "react";
import classes from "./Card.module.css";
import ImageHelper from "./ImageHelper/ImageHelper";
import * as action from "../../../Redux/Actions/index";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../Cart/CartHelper/CartHelper";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "react-modal";

const Card = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
  const closeModal = () => {
    setIsModalOpen(false);
  };
  console.log("isModalOpen" + isModalOpen);

  return (
    <React.Fragment>
      <div
        className={classes.card}
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        <ImageHelper id={props.product._id} />
        <p>
          <strong>Name:</strong> {props.product.name}
        </p>
        <p>
          <strong> Price:</strong> ${props.product.price}
        </p>

        {showRemoveFromCart()}
        {updateProduct()}
        {deleteProduct()}
      </div>
      <Modal
        style={{ width: "300px" }}
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className={classes.modal}
      >
        <ImageHelper id={props.product._id} />
        <h1>{props.product.name}</h1>
        <p>
          <strong>Description: </strong> {props.product.description}
        </p>
        <div>
          <button onClick={closeModal}>Close</button>
        </div>

        {showAddToCart()}
      </Modal>
    </React.Fragment>
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
