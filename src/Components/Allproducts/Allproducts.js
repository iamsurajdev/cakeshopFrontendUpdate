import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as action from "../../Redux/Actions/index";
import Spinner from "../UI/Spinner/Spinner";
import BaseComponent from "../BaseComponent/BaseComponent";
import Card from "../UI/Card/Card";

import classes from "./Allproducts.module.css";
const Allproducts = (props) => {
  const [value, setValue] = useState({
    search: "",
  });

  const { search } = value;

  onchange = (e) => {
    setValue({ search: e.target.value });
  };

  const getProductsHelper = () => {
    props.getProducts(props.product);
  };
  useEffect(() => {
    getProductsHelper();
  }, []);

  let view = <Spinner />;
  if (props.product) {
    const filteredProducts = props.product.filter((prod) => {
      return prod.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
    view = filteredProducts.map((prod, index) => (
      <div key={index}>
        <Card
          product={prod}
          addtoCart={true}
          removeFromCart={false}
          updateProduct={false}
          deleteProduct={false}
        />
      </div>
    ));
  }

  return (
    <BaseComponent>
      <input placeholder="Search" onChange={onchange} />
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
    getProducts: (product) => dispatch(action.productFetch(product)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Allproducts);
