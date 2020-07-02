import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import BaseComponent from "../../BaseComponent/BaseComponent";
import * as action from "../../../Redux/Actions/index";
import Card from "../../UI/Card/Card";
import Spinner from "../../UI/Spinner/Spinner";
const ManageProduct = (props) => {
  const getProductsHelper = () => {
    props.onInitProducts(props.product);
  };

  useEffect(() => {
    getProductsHelper();
  }, [props.reload]);

  let manageProductBody = <Spinner />;

  if (props.product) {
    manageProductBody = props.product.map((prod, index) => {
      return (
        <Grid key={index} item>
          <Card
            product={prod}
            addtoCart={false}
            removeFromCart={false}
            updateProduct={true}
            deleteProduct={true}
          />
        </Grid>
      );
    });
  }

  return (
    <BaseComponent>
      <Grid container justify="center">
        {manageProductBody}
      </Grid>
    </BaseComponent>
  );
};

const mapStateToProps = (state) => {
  return {
    product: state.products.products,
    reload: state.products.reload,
  };
};
const mapDisPatchToProps = (dispatch) => {
  return {
    onInitProducts: (product) => dispatch(action.productFetch(product)),
    onDeleteProduct: (productId, userId, token) =>
      dispatch(action.productDelete(productId, userId, token)),
  };
};

export default connect(mapStateToProps, mapDisPatchToProps)(ManageProduct);
