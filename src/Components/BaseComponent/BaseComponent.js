import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const BaseComponent = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default BaseComponent;
