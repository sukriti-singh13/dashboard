import React from "react";
import GoogleIcon from "../assets/google-icon.svg";
import AppleIcon from "../assets/appleIcon.svg";
import { useNavigate } from "react-router-dom";
const Signin = () => {
  const navigate = useNavigate();
  const toDashboard = () => {
    navigate("/home");
  };
  return (
    <div className="main_container">
      <section className="left_section">
        <h1>Board.</h1>
      </section>
      <section className="right_section">
        <h2>Sign In</h2>
        <p className="signin_p">Sign in to your account</p>
        <div className="signin_options">
          <button className="google">
            <img src={GoogleIcon} alt="google-icon" />
            Sign in with Google
          </button>
          <button className="apple">
            <img src={AppleIcon} alt="apple-icon" />
            Sign in with Apple
          </button>
        </div>
        <form onSubmit={toDashboard}>
          <div className="wrapper">
            <label>Email address</label>
            <input type="email" required />
          </div>
          <div className="wrapper">
            <label>Password</label>
            <input type="password" required />
          </div>
          <p className="forgot_password">Forgot Password ?</p>
          <button type="submit" className="sign_in_button">
            Sign In
          </button>
        </form>

        <p className="no_account">
          Don’t have an account? <span className="colored">Register here</span>
        </p>
      </section>
    </div>
  );
};

export default Signin;
