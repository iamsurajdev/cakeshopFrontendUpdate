import React, { useState, useEffect } from "react";
import { loadCart } from "./CartHelper/CartHelper";
import BaseComponent from "../BaseComponent/BaseComponent";
import { connect } from "react-redux";
import Card from "../UI/Card/Card";

const Cart = (props) => {
  const [products, setProducts] = useState([0]);

  useEffect(() => {
    setProducts(loadCart());
  }, [props.reload]);

  const loadAllProducts = () => {
    return (
      <div>
        <h2>this section is to load products</h2>
        {products.map((product, index) => {
          return (
            <Card
              key={index}
              product={product}
              addtoCart={false}
              removeFromCart={true}
            />
          );
        })}
      </div>
    );
  };

  return (
    <BaseComponent>
      {localStorage.getItem("cart") ? (
        loadAllProducts()
      ) : (
        <h3>No products found</h3>
      )}
    </BaseComponent>
  );
};

const mapStateToProps = (state) => {
  return {
    reload: state.cart.reload,
  };
};

export default connect(mapStateToProps)(Cart);
