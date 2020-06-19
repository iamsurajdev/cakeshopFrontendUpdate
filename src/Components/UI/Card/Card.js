import React from "react";
import classes from "./Card.module.css";
import ImageHelper from "./ImageHelper/ImageHelper";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../Cart/CartHelper/CartHelper";
import { connect } from "react-redux";

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
          }}
        >
          Remove from cart
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
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps)(Card);
