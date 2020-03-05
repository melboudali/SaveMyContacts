import React from "react";
import ReactDOM from "react-dom";
import State from "./Components/Context/Context/State";
import App from "./App";

ReactDOM.render(
  <State>
    <App />
  </State>,
  document.getElementById("root")
);
