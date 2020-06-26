import React from "react";
import BaseComponent from "../BaseComponent/BaseComponent";
import image from "../../Assets/Images/muffins.jpg";
import classes from "./Home.module.css";

const Home = (props) => {
  return (
    <BaseComponent>
      <div className={classes.home}>
        <img className={classes.image} src={image} alt="flower" />
        <div className={classes.heading}>
          <h1>Kazel Cakes</h1>
        </div>
      </div>
    </BaseComponent>
  );
};

export default Home;
