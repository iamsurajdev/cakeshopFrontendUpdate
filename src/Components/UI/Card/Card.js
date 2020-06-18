import React from "react";
import classes from "./Card.module.css";
import ImageHelper from "./ImageHelper/ImageHelper";

const Card = (props) => {
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
    </div>
  );
};

export default Card;
