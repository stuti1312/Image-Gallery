import React from "react";
import "./App.css";
import LoginForm from "./Components/LoginForm";
import SignupForm from "./Components/SignupForm";
import SearchImage from "./Components/SearchImage";
import Navbar from "./Components/Navbar";
import ProtectedRoute from "../src/ProtectedRoute/ProtectedRoute";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import NewLogin from "./component/NewLogin"

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/login" component={LoginForm} exact />
        <Route path="/signup" component={SignupForm} />
        <ProtectedRoute path="/searchimage" component={SearchImage} />
        <Route component={LoginForm} />
      </Switch>
    </div>
  );
};

export default App;
