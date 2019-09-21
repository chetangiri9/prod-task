import React from "react";
import "./Login.css";

const Login = ({ email, password, handleChange, handleFormSubmit }) => (
  <div className="box-container">
    <div className="inner-container">
      <div className="header">Login</div>
      <div className="box">
        <div className="input-group">
          <input
            type="text"
            value={email}
            onChange={handleChange}
            name="email"
            className="login-input"
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={handleChange}
            name="password"
            className="login-input"
            placeholder="Password"
          />
        </div>

        <button type="button" className="login-btn" onClick={handleFormSubmit}>
          Login
        </button>
      </div>
    </div>
  </div>
);

export default Login;
