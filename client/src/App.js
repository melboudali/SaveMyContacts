import React, { Fragment } from "react";
import Home from "./Components/Pages/Home";
import "./Assets/Style/App.css";
import setAuthToken from "./Utils/SetAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return <Home />;
};

export default App;
