import React from "react";
import { Link } from "react-router-dom";
import history from "../history";

class Login extends React.Component {
  state = {
    email: "",
    rememberMe: false
  };

  handleChange = e => {
    e.preventDefault();
    const input = e.target;
    const value = input.type === "checkbox" ? input.checked : input.value;

    this.setState({ [input.name]: value });
  };

  componentDidMount() {
    const rememberMe = localStorage.getItem("rememberMe") === "true";
    const email = rememberMe ? localStorage.getItem("user") : "";
    this.setState({ email, rememberMe });
  }

  handleFormSubmit = () => {
    const { email, rememberMe } = this.state;
    window.localStorage.setItem("rememberMe", rememberMe);
    window.localStorage.setItem("user", rememberMe ? email : "");

    history.push({ pathname: "/search" });
  };

  render() {
    return (
      <div className="box-container">
        <div className="inner-container">
          <div className="header">Login</div>
          <div className="box">
            <div className="input-group">
              <input
                type="text"
                value={this.state.user}
                onChange={this.handleChange}
                name="email"
                className="login-input"
                placeholder="Email"
              />
            </div>

            <label>
              <input
                name="rememberMe"
                checked={this.state.rememberMe}
                onChange={this.handleChange}
                type="checkbox"
              />{" "}
              Remember me
            </label>

            <button
              type="button"
              className="login-btn"
              onClick={this.handleFormSubmit}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
