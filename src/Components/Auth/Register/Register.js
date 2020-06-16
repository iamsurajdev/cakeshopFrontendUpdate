import React, { useState } from "react";
import { connect } from "react-redux";
import * as action from "../../../Redux/Actions/index";

const Register = (props) => {
  //local state for store the event before sending to redux
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  // De-structuring the state
  const { name, email, password } = user;

  // Form submit handler
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(user);

    props.onRegister(name, email, password);
  };

  //set the form data to the local state
  const handleChange = (name) => (event) => {
    setUser({ ...user, [name]: event.target.value });
  };

  return (
    <div>
      {props.authError && <p>{props.authError}</p>}
      <form onSubmit={onSubmitHandler}>
        <input
          onChange={handleChange("name")}
          value={name}
          placeholder="name"
        />
        <input
          onChange={handleChange("email")}
          value={email}
          placeholder="e-mail"
        />
        <input
          onChange={handleChange("password")}
          value={password}
          placeholder="Password"
        />
        <button>Register</button>
      </form>
    </div>
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
    onRegister: (name, email, password) =>
      dispatch(action.auth(name, email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
