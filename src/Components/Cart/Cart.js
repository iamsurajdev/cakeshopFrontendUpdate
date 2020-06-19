import React, { useState, useEffect } from "react";
import { loadCart } from "./CartHelper/CartHelper";
import BaseComponent from "../BaseComponent/BaseComponent";

const Cart = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(loadCart());
  }, [reload]);

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
      {products.length > 0 ? (
        loadAllProducts(products)
      ) : (
        <h3>No products found</h3>
      )}
    </BaseComponent>
  );
};

export default Cart;
