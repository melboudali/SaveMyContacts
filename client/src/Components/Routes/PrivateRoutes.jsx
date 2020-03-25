import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../Context/Auth/AuthContext";

const PrivateRoutes = ({ component: Component, ...rest }) => {
  const { isAuthenticated, loading } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={props =>
        !isAuthenticated && !loading ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoutes;
