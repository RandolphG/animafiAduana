import React from "react";
import "./styles/_loginFormStyles.scss";

/**
 * Login Form
 * @constructor
 */
const LoginForm = () => {
  return (
    <div className="loginFormContainer">
      <div className="box">
        <img
          className="logo"
          alt="dribble-logo"
          src="https://www.dropbox.com/s/vwcn548w1gsk7lb/dribbble-ball-icon.png?raw=1"
        />
        <p className="signin">Sign in</p>
        <p className="signin-text">
          Login with Twitter, Facebook,
          <br /> Google or:
        </p>
        <div className="signin-row" />
        <input name="user" type="text" placeholder="Username or Email" />
        <br />
        <input name="pass" type="password" placeholder="Password" required />
        <button>Sign In</button>
        <p className="foot-txt">Forgot your password?</p>
        <p className="foot-txt">
          Not a member? <span className="bold" />
          Sign up now
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
