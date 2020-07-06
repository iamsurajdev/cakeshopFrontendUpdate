import React, { useState, useEffect } from "react";
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

  const [validate, setValidate] = useState({
    emailError: "",
    passwordError: "",
    isValidate: true,
  });

  // De-structuring the state
  const { email, password } = user;

  useEffect(() => {
    props.onInitRemoveError();
  }, []);

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
    if (name === "email") {
      if (!event.target.value.includes("@")) {
        setValidate({
          ...validate,
          emailError: "Please enter a valid E-mail",
          isValidate: false,
        });
      } else {
        setValidate({ ...validate, emailError: "", isValidate: true });
      }
    }
    if (name === "password") {
      if (event.target.value.length < 6) {
        setValidate({
          ...validate,
          passwordError: "Password should be more than 6 correctors",
          isValidate: false,
        });
      } else {
        setValidate({ ...validate, passwordError: "", isValidate: true });
      }
    }

    console.log(validate.emailError);
  };

  return (
    <BaseComponent>
      {props.authError && <p>{props.authError}</p>}
      <form>
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
        <div>{validate.passwordError && <p>{validate.passwordError}</p>}</div>
        <button
          disabled={validate.isValidate && password && email ? false : true}
          onClick={onSubmitHandler}
        >
          Login
        </button>
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
    onInitRemoveError: () => dispatch(action.clearAuthErrorOnInit()),
    onLogin: (name, email, password) =>
      dispatch(action.auth(name, email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
