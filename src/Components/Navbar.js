import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const logout = () => {
    localStorage.removeItem("LoginData"); //simply removing the login data only not user data
    window.location.reload(); // reload the page
  };

  return (
    <div>
      {/* if no login data is present in local storage */}
      {!localStorage.getItem("LoginData") && (
        <div>
          <Link to="/login">Login </Link>
          <Link to="/signup">Signup </Link>
        </div>
      )}

      {/* if login data is present in local storage */}
      {localStorage.getItem("LoginData") && (
        <div>
          <Link to="/searchimage">Home</Link>
          <Link to="/logout" onClick={logout}>
            Logout
          </Link>
        </div>
      )}
    </div>
  );
}
