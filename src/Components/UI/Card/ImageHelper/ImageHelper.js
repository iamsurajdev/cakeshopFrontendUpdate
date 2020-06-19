import React from "react";
import classes from "./ImageHelper.module.css";

const ImageHelper = (props) => {
  const Url = props.id
    ? `http://localhost:8000/api//product/photo/${props.id}`
    : `https://cdn.pixabay.com/photo/2015/11/09/14/43/laptop-1035345_1280.jpg`;

  return <img className={classes.main} src={Url} alt="productPhoto" />;
};

export default ImageHelper;
