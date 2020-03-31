import React from "react";
import ReactDOM from "react-dom";
import State from "./Components/Context/Context/State";
import AuthState from "./Components/Context/Auth/AuthState";
import AlertState from "./Components/Context/Alert/AlertState";
import App from "./App";

ReactDOM.render(
  <AuthState>
    <State>
      <AlertState>
        <App />
      </AlertState>
    </State>
  </AuthState>,
  document.getElementById("root")
);
