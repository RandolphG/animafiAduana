import React from "react";

const LoginForm = () => {
  return (
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
      <div className="signin-row">
        <i className="ic1 fab fa-twitter" />
        <i className="ic2 fab fa-facebook" />
        <i className="ic3 fab fa-google" />
      </div>
      <input name="user" type="text" placeholder="Username or Email" />
      <br />
      <input name="pass" type="password" placeholder="Password" required />
      <button>Sign In</button>
      <p className="foot-txt">Forgot your password?</p>
      <p className="foot-txt">
        Not a memeber? <span className="bold" />
        Sign up now
      </p>
    </div>
  );
};

export default LoginForm;
