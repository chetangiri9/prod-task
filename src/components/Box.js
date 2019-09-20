import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";

class Box extends React.Component {
  state = { isLoginOpen: true, isRegisterOpen: false };

  showLoginBox = () => {
    this.setState({ isLoginOpen: true, isRegisterOpen: false });
  };

  showRegisterBox = () => {
    this.setState({ isRegisterOpen: true, isLoginOpen: false });
  };

  render() {
    return (
      <div>
        <div className="box-container">
          {this.state.isLoginOpen && <Login />}
          {this.state.isRegisterOpen && <SignUp />}
        </div>
        <div className="box-controller">
          <div
            className={
              "controller " +
              (this.state.isLoginOpen ? "selected-controller" : "")
            }
            onClick={this.showLoginBox}
          >
            Login
          </div>
          <div
            className={
              "controller " +
              (this.state.isRegisterOpen ? "selected-controller" : "")
            }
            onClick={this.showRegisterBox}
          >
            Register
          </div>
        </div>
      </div>
    );
  }
}

export default Box;
