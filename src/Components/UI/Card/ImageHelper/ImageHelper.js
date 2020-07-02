import React from "react";
import { CardMedia } from "@material-ui/core";
const ImageHelper = (props) => {
  const Url = props.id
    ? `http://localhost:8000/api//product/photo/${props.id}`
    : `https://cdn.pixabay.com/photo/2015/11/09/14/43/laptop-1035345_1280.jpg`;

  return (
    <CardMedia
      component="img"
      alt="Contemplative Reptile"
      height={props.size}
      image={Url}
      title="Contemplative Reptile"
    />
  );
};

export default ImageHelper;
