import React, { useState } from "react";
import classes from "./Card.module.css";
import ImageHelper from "./ImageHelper/ImageHelper";
import * as action from "../../../Redux/Actions/index";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../Cart/CartHelper/CartHelper";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import Button from "../Button/Button";

const CardComponent = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addToCart = () => {
    if (props.isAuthenticated) {
      addItemToCart(props.product);
    } else {
      alert("you are not login");
    }
  };

  const showAddToCart = () => {
    return (
      props.addtoCart && (
        <Button
          btnType="success"
          clicked={() => {
            addToCart();
            closeModal();
          }}
        >
          Add to Cart
        </Button>
      )
    );
  };

  const showRemoveFromCart = () => {
    return (
      props.removeFromCart && (
        <Button
          btnType="neutral"
          clicked={() => {
            removeItemFromCart(props.product._id);
            props.onRemoveItemReload();
          }}
        >
          Remove from cart
        </Button>
      )
    );
  };
  const updateProduct = () => {
    return (
      props.updateProduct && (
        <Link
          className={classes.updateLink}
          to="/admin/dashboard/updateProduct"
        >
          <Button
            btnType="warning"
            clicked={() => {
              props.setIdForUpdateProduct(props.product._id);
            }}
          >
            Update Product
          </Button>
        </Link>
      )
    );
  };
  const deleteProduct = () => {
    return (
      props.deleteProduct && (
        <Button
          btnType="danger"
          clicked={() => {
            const userId = localStorage.getItem("userId");
            const token = localStorage.getItem("token");
            props.onDeleteProduct(props.product._id, userId, token);
          }}
        >
          Delete Product
        </Button>
      )
    );
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  console.log("isModalOpen" + isModalOpen);

  return (
    <React.Fragment>
      <Card
        className={classes.card}
        onClick={props.addtoCart ? openModal : null}
      >
        <CardActionArea>
          <ImageHelper id={props.product._id} size="150" />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              <strong>Name:</strong> {props.product.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <strong> Price:</strong> ${props.product.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        {showRemoveFromCart()}
        {updateProduct()}
        {deleteProduct()}
      </Card>
      <Modal
        style={{ width: "300px" }}
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className={classes.modal}
      >
        <CardActionArea>
          <ImageHelper id={props.product._id} size="250" />
        </CardActionArea>
        <h1>{props.product.name}</h1>
        <p>
          <strong>Description: </strong> {props.product.description}
        </p>

        <div className={classes.addToCartButtonDiv}>{showAddToCart()}</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(CardComponent);
