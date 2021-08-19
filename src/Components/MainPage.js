import { useState } from "react";
import LoginForm from "./LoginForm";
import "./MainPage.css";
import SearchImage from "../Components/SearchImage"


function MainPage() {
  const adminUser = {
    email: "rajnish8869@gmail.com",
    password: "12345678",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    // authentication
    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log("logged in");
      setUser({ name: details.name, email: details.email });
    } else {
      console.log("Details do not match!!");
      setError("Details do not match!!");
    }
  };

  const Logout = () => {
    console.log("LOGOUT");
    setUser({ name: "", email: "" });
  };

  return (
    <div className="App">
      <h1>LOGIN FORM</h1>

      {/* using ternary operator for login logout */}
      {user.email !== "" ? (
        <div className="welcome">
          <h2>
            WELCOME!!, <span>{user.name}</span>
          </h2>
          <SearchImage/>
          <button onClick={Logout}>LOGOUT</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default MainPage;
