import React, { useState } from "react";
import { connect } from "react-redux";
import * as action from "../../../Redux/Actions/index";
import BaseComponent from "../../BaseComponent/BaseComponent";
// import { Formik } from "formik";
// import * as EmailValidator from "email-validator";
// import * as Yup from "yup";

const Login = (props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // const [validate, setValidate] = useState({
  //   emailError: "",
  //   passwordError: "",
  // });

  // De-structuring the state
  const { email, password } = user;

  // Form submit handler
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(user);
    props.onLogin(null, email, password);
  };

  //set the form data to the local state
  const handleChange = (name) => (event) => {
    setUser({ ...user, [name]: event.target.value });

    // this is for validation but not completed yet
    // if (name === "email") {
    //   if (!event.target.value.match("@") && !event.target.value.match(".")) {
    //     setValidate({ ...validate, emailError: "Please enter a valid E-mail" });
    //   }
    // }

    // console.log(validate.emailError);
  };

  return (
    <BaseComponent>
      {props.authError && <p>{props.authError}</p>}
      <form onSubmit={onSubmitHandler}>
        <input
          onChange={handleChange("email")}
          value={email}
          placeholder="e-mail"
          name="email"
        />
        <div>{validate.emailError && <p>{validate.emailError}</p>}</div>
        <input
          onChange={handleChange("password")}
          value={password}
          placeholder="Password"
          name="password"
        />
        <button>Login</button>
      </form>
    </BaseComponent>
  );
};

//pull redux state
const mapStateToProps = (state) => {
  return {
    authError: state.auth.error,
  };
};

//dispatch action to redux
const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (name, email, password) =>
      dispatch(action.auth(name, email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
