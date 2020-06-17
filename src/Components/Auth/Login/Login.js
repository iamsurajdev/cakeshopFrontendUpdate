import React, { useState } from "react";
import { connect } from "react-redux";
import * as action from "../../../Redux/Actions/index";
import BaseComponent from "../../BaseComponent/BaseComponent";
// import { GoogleLogin } from "react-google-login";
// import FacebookLogin from "react-facebook-login";

const Login = (props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

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
  };

  // const responseGoogle = (response) => {
  //   console.log(response);
  // };
  // const responseFacebook = (response) => {
  //   console.log(response);
  // };

  return (
    <BaseComponent>
      {props.authError && <p>{props.authError}</p>}
      <form onSubmit={onSubmitHandler}>
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
        <button>Login</button>
      </form>
      {/* for future */}
      {/* <GoogleLogin
        clientId=""
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
      <FacebookLogin
        appId=""
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
        onClick={responseFacebook}
      /> */}
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
