import React, { Component } from "react";
import "./LoginForm.css";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      User_data: JSON.parse(localStorage.getItem("UserData")),
      /*simply taking user data from local storage,
      which is in JSON string format bydefault,
      and converting JSON string data into JS object,
      and storing thedata in a variable User_data */

      error: "",
      isAuth: localStorage.getItem("LoginData"),
      /* simply checking for login data in local storage,
      and storing that data into new variable isAuth */
    };
  }

  changeHandler = (e) => {
    /* name:value pair is used,
    because we named the inputs to match their corresponding values in state,
    it's super easy to update the state*/
    this.setState({ [e.target.name]: e.target.value.replace(/\s+/g, "") }); // simply used to remove extra space
  };

  // used to check for login state
  componentDidMount() {
    const { history } = this.props;
    if (this.state.isAuth) {
      history.push("/searchimage"); // push the page to search image and reload, if we have login data
      window.location.reload();
    }
  }

  submitHandler = (e) => {
    e.preventDefault();

    // to get our form data out of the state
    const { email, password } = this.state;

    // To store data in localStorage
    if (
      this.state.User_data.map((e) => e.email) == email && // compairing the data of login/loginData and signup/userData
      this.state.User_data.map((e) => e.password) == password
    ) {
      var LoginData = [
        {
          username: this.state.User_data.map((e) => e.username),
          email: email,
          password: password,
        },
      ];

      localStorage.setItem("LoginData", JSON.stringify(LoginData)); //setting data into local storage and coverting into

      // to push to search image after login successfully
      const { history } = this.props;
      history.push("/searchimage");
      window.location.reload();
    } else {
      return this.setState({ error: "Password is Wrong" });
    }
  };

  render() {
    const { email, password } = this.state; //   destructuring
    return (
      <div className="form-inner">
        <h1>Login</h1>
        <form onSubmit={this.submitHandler}>
          <div className="form-group1">
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

          <div className="form-group2">
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

          <h5>
            Don't have an account? Then, create an account using SignUp page
          </h5>
        </form>

        {/* if error throw message */}
        {this.state.error}
      </div>
    );
  }
}

export default LoginForm;
