import React, { Fragment } from "react";
import "./styles/_loginFormStyles.scss";
import { useSelector } from "react-redux";
import { getSignInModalState } from "../../../state-mgmt/store";
import { motion } from "framer-motion";

/**
 * Login Form
 * @constructor
 */
const LoginForm = () => {
  const show = useSelector(getSignInModalState);

  const SigninButton = () => <button>Sign In</button>;

  const Password = () => (
    <input name="pass" type="password" placeholder="Password" required />
  );

  const UserName = () => (
    <input name="user" type="text" placeholder="Username or Email" />
  );

  const SocialSignIn = () => (
    <p className="signin-text">
      Login with Twitter, Facebook,
      <br /> Google or:
    </p>
  );

  const LogoImage = () => (
    <img
      className="logo"
      alt="dribble-logo"
      src="https://www.dropbox.com/s/vwcn548w1gsk7lb/dribbble-ball-icon.png?raw=1"
    />
  );

  const Footer = () => (
    <>
      <p className="foot-txt">Forgot your password?</p>
      <p className="foot-txt">
        Not a member? <span className="bold" />
        Sign up now
      </p>
    </>
  );

  const motionSettings = {
    initial: {
      opacity: 0,
      y: -100,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: -100,
    },
  };

  return (
    <Fragment>
      {show && (
        <motion.div {...motionSettings} className="loginFormContainer">
          <div className="box">
            <LogoImage />
            <p className="signin">Sign in</p>
            <SocialSignIn />
            <div className="signin-row" />
            <UserName />
            <br />
            <Password />
            <SigninButton />
            <Footer />
          </div>
        </motion.div>
      )}
    </Fragment>
  );
};
export default LoginForm;
