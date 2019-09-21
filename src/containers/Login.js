import React from "react";
import { message } from "antd";
import LoginForm from "../components/Login";
import history from "../history";
import { Redirect } from "react-router";

const USERS_DATA = [
  {
    email: "test@mail1.com",
    password: "1q2w3e4r5t"
  },
  {
    email: "test1@mail1.com",
    password: "0o9i8u7y6t"
  },
  {
    email: "test3@mail.com",
    password: "5t4r6y3e"
  }
];

class Login extends React.Component {
  state = {
    email: "",
    password: ""
  };

  componentDidMount() {
    const users = JSON.parse(window.localStorage.getItem("users"));
    if (!users || !users.length) {
      window.localStorage.setItem("users", JSON.stringify(USERS_DATA));
    }
  }

  handleChange = e => {
    e.preventDefault();
    const input = e.target;
    const value = input.value;

    this.setState({ [input.name]: value });
  };

  handleFormSubmit = () => {
    const { email, password } = this.state;
    if (!email.length || !password.length) {
      message.error("Email and password are required.");
      return false;
    }
    const users = JSON.parse(window.localStorage.getItem("users"));
    if (
      users.findIndex(el => el.email === email && el.password === password) >= 0
    ) {
      message.success("Logging you in");
      window.localStorage.setItem("authorised", true);
      history.push({ pathname: "/search" });
    } else {
      message.error("Invalid credentials");
      return false;
    }
  };

  render() {
    const { authorised } = window.localStorage;

    if (authorised) {
      return <Redirect to="/search" />;
    }
    const { email, password } = this.state;
    return (
      <LoginForm
        email={email}
        password={password}
        handleChange={this.handleChange}
        handleFormSubmit={this.handleFormSubmit}
      />
    );
  }
}

export default Login;
