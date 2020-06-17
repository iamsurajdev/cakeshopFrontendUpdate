import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as action from "../../Redux/Actions/index";
import Spinner from "../UI/Spinner/Spinner";
import BaseComponent from "../BaseComponent/BaseComponent";

const Allproducts = (props) => {
  const getProductsHelper = () => {
    props.getProducts();
  };
  useEffect(() => {
    getProductsHelper();
  }, []);

  let view = <Spinner />;
  if (props.product) {
    view = props.product.map((prod) => (
      <ul key={prod.id}>
        <li>Name {prod.name}</li>
        <li>Description {prod.description}</li>
        <li>Price $ {prod.price}</li>
      </ul>
    ));
  }

  return <BaseComponent>{view}</BaseComponent>;
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
