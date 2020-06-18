import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as action from "../../Redux/Actions/index";
import Spinner from "../UI/Spinner/Spinner";
import BaseComponent from "../BaseComponent/BaseComponent";
import Card from "../UI/Card/Card";

import classes from "./Allproducts.module.css";
const Allproducts = (props) => {
  const getProductsHelper = () => {
    props.getProducts();
  };
  useEffect(() => {
    getProductsHelper();
  }, []);

  let view = <Spinner />;
  if (props.product) {
    view = props.product.map((prod, index) => (
      <div key={index}>
        <Card product={prod} />
      </div>
    ));
  }

  return (
    <BaseComponent>
      <div className={classes.allProducts}>{view}</div>
    </BaseComponent>
  );
};

const mapStateToProps = (state) => {
  console.log(state.products.products);

  return {
    product: state.products.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(action.productFetch()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Allproducts);
