import React from "react";
import { Redirect, Route } from "react-router-dom";

const isAuthenticated = JSON.parse(localStorage.getItem("LoginData"));

/* Protected Route is used here,
to accept the component and its details like props,
to which application has to route if the user has authenticated.
Otherwise user will be redirected to home page. */
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
