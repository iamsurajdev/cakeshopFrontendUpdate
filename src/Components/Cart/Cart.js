import React, { useState, useEffect } from "react";
import { loadCart } from "./CartHelper/CartHelper";
import BaseComponent from "../BaseComponent/BaseComponent";
import { connect } from "react-redux";
import Card from "../UI/Card/Card";
import { Grid } from "@material-ui/core";

const Cart = (props) => {
  const [products, setProducts] = useState();

  useEffect(() => {
    setProducts(loadCart());
  }, [props.reload]);

  const loadAllProducts = () => {
    console.log(products);

    return (
      <Grid container justify="center">
        {products ? (
          products.length > 0 ? (
            products.map((product, index) => {
              return (
                <Grid key={index} item>
                  <Card
                    product={product}
                    addtoCart={false}
                    removeFromCart={true}
                  />
                </Grid>
              );
            })
          ) : (
            <h3>No products found</h3>
          )
        ) : (
          <h3>No products found</h3>
        )}
      </Grid>
    );
  };

  return <BaseComponent>{loadAllProducts()}</BaseComponent>;
};

const mapStateToProps = (state) => {
  return {
    reload: state.cart.reload,
  };
};

export default connect(mapStateToProps)(Cart);
