import React from "react";
import "./App.css";
import LoginForm from "./Components/LoginForm";
import SignupForm from "./Components/SignupForm";
import SearchImage from "./Components/SearchImage";
import Navbar from "./Components/Navbar"; // used for showing login and signup links on the top of page
import ProtectedRoute from "../src/ProtectedRoute/ProtectedRoute"; // used for Authentication purpose
import { Switch, Route } from "react-router-dom"; //used for navigation

const App = () => {
  return (
    <div>
      <Navbar />

      {/* switch is used for checking one condition at a time if any path matches */}
      <Switch>
        <Route exact path="/login" component={LoginForm} />
        <Route path="/signup" component={SignupForm} />
        <ProtectedRoute path="/searchimage" component={SearchImage} />

        {/* used to show initially login page as user enters, otherwise not necessary */}
        {/* <Route component={LoginForm} /> */}
      </Switch>
    </div>
  );
};

export default App;
