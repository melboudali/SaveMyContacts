import React from "react";
import ReactDOM from "react-dom";
import AuthState from "./Components/Context/Auth/AuthState";
import State from "./Components/Context/Context/State";
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
