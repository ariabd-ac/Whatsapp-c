import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionType } from "./reducer";

const Login = () => {
  const [{}, dispatch] = useStateValue();

  const singIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionType.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" />
        <div className="login__text">
          <h1>Sign In to WChat</h1>
        </div>
        <Button onClick={singIn}>Sign In With Google</Button>
      </div>
    </div>
  );
};

export default Login;
