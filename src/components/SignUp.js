import React from "react";

class SignUp extends React.Component {
  state = {
    user: "",
    password: ""
  };

  submitRegister = e => {
    const input = e.target;
    const value = input.value;

    this.setState({ [input.name]: value });
  };

  handleFormSubmit = () => {
    const { user, password } = this.state;
    window.localStorage.setItem("user", user);
    window.localStorage.setItem("password", password);
  };

  render() {
    return (
      <div className="inner-container">
        <div className="header">Register</div>
        <div className="box">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              value={this.state.user}
              onChange={this.submitRegister}
              name="email"
              className="login-input"
              placeholder="Email"
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={this.state.password}
              name="password"
              onChange={this.submitRegister}
              className="login-input"
              placeholder="Password"
            />
          </div>
          <button
            type="button"
            className="login-btn"
            onClick={this.handleFormSubmit}
          >
            Register
          </button>
        </div>
      </div>
    );
  }
}

export default SignUp;
