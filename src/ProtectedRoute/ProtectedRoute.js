import React from "react";
import { Redirect, Route } from "react-router-dom";

const isAuthenticated = JSON.parse(localStorage.getItem("LoginData"));

const ProtectedRoute = ({ component: Component, data, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? (
        <Component {...props} {...data} />
      ) : (
        <Redirect to={{ pathname: "/login" }} />
      )
    }
  />
);

export default ProtectedRoute;
