import React, { Component } from "react";
import "./SignupForm.css";
// import axios from "axios";

class SignupForm extends Component {
  constructor() {
    super();
    this.state = {
      username:"",
      email: "",
      password: "",
      isAuth : localStorage.getItem("LoginData")
    };
  }

  changeHandler = (e) => {
    // name:value pair is used because, we named the inputs to match their corresponding values in state, it's super easy to update the state this way
    this.setState({ [e.target.name]: e.target.value.replace(/\s+/g, "") });
  };

  componentDidMount(){
    const { history } = this.props;
    if (this.state.isAuth) {
      history.push("/searchimage");
      window.location.reload();
    }
  };

  submitHandler = (e) => {
    e.preventDefault();
    // to get our form data out of the state
    const { username, email, password } = this.state;

    // To show data in console
    console.log("email", email);
    console.log("password", password);

    // To store data in localStorage
    var UserData = [{ username: username, password: password, email: email }];

    localStorage.setItem("UserData", JSON.stringify(UserData));
  };

  render() {
    const { username, email, password } = this.state; //   destructuring
    return (
      <div>
        <h1>Signup Page</h1>
        <form onSubmit={this.submitHandler}>
          <div>
            <div>
              <label htmlFor="username">Name</label>
            </div>
            <div>
              <input
                type="text"
                name="username"
                id="username"
                value={username}
                onChange={this.changeHandler}
                required
              />
            </div>
          </div>

          <div>
            <div>
              <label htmlFor="email">Email</label>
            </div>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={this.changeHandler}
                required
              />
            </div>
          </div>

          <div>
            <div>
              <label htmlFor="password">Password</label>
            </div>
            <div>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={this.changeHandler}
                required
              />
            </div>
          </div>
          <div>
            <button type="submit">Signup</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;
