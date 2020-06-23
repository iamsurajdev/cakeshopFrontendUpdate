import React, { useEffect } from "react";
import { connect } from "react-redux";
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
        <div key={index}>
          {/* // if i don't use photos then this ia a better option rather pass it thorough Card  */}
          {/* <h1>{prod.name}</h1>
          <button
            onClick={() => {
              const userId = localStorage.getItem("userId");
              const token = localStorage.getItem("token");
              props.onDeleteProduct(prod._id, userId, token);
            }}
          >
            Delete
          </button> */}
          <Card
            product={prod}
            addtoCart={false}
            removeFromCart={false}
            updateProduct={true}
            deleteProduct={true}
          />
        </div>
      );
    });
  }

  return <BaseComponent>{manageProductBody}</BaseComponent>;
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
