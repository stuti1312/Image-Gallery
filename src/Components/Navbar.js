import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
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
          <Link to="/login"><button className="link-btn"> Login </button></Link>
          <Link to="/signup"><button className="link-btn">Signup</button> </Link>
        </div>
      )}

      {/* if login data is present in local storage */}
      {localStorage.getItem("LoginData") && (
        <div>
          <Link to="/searchimage"><button className="link-btn">Home</button></Link>
          <Link to="/logout" onClick={logout}><button className="link-btn">
            Logout</button>
          </Link>
        </div>
      )}
    </div>
  );
}
