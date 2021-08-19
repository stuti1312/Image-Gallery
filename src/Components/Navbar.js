import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const logout = () => {
    localStorage.removeItem("LoginData");
    window.location.reload();
  };


  return (
    <div>
      { ! localStorage.getItem("LoginData")  && (
        <div>
      <Link to="/login">Login </Link>
      <Link to="/signup">Signup </Link>
        </div>
      )}

      {localStorage.getItem("LoginData") && (
        <div>
          <Link to="/searchimage">Home </Link>
          <Link to="/logout" onClick={logout}>
            Logout{" "}
          </Link>
        </div>
      )}
    </div>
  );
}
