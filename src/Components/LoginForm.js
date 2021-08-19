import React, { Component } from "react";
import "./LoginForm.css";

// import axios from "axios";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      User_data: JSON.parse(localStorage.getItem("UserData")),
      error: "",
      isAuth : localStorage.getItem("LoginData")
    };
  }

  changeHandler = (e) => {
    // name:value pair is used because, we named the inputs to match their corresponding values in state, it's super easy to update the state this way
    this.setState({ [e.target.name]: e.target.value.replace(/\s+/g, "") });
  };

  var 

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
    const { email, password } = this.state;

    // To show data in console
    console.log(
      "email",
      email,
      "this.state.User_data.map(e=> e.email)",
      this.state.User_data.map((e) => e.email)
    );
    console.log(
      "password",
      password,
      "this.state.User_data.map(e=> e.password)",
      this.state.User_data.map((e) => e.password)
    );

    // To store data in localStorage
    if (
      this.state.User_data.map((e) => e.email) == email &&
      this.state.User_data.map((e) => e.password) == password
    ) {
      var LoginData = [
        {
          username: this.state.User_data.map((e) => e.username),
          email: email,
          password: password,
        },
      ];
      localStorage.setItem("LoginData", JSON.stringify(LoginData));
      const { history } = this.props;
      history.push("/searchimage");
      window.location.reload();
    } else {
      return this.setState({ error: 'Password is Wrong' });
    }
  };

  render() {
    const { email, password } = this.state; //   destructuring
    return (
      <div>
        <h1>Login Page</h1>
        <form onSubmit={this.submitHandler}>
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
            <button type="submit">Login</button>
          </div>
        </form>
        {this.state.error}

      </div>
    );
  }
}

export default LoginForm;
