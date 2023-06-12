import React, { useState } from "react";
import GoogleIcon from "../assets/google-icon.svg";
import AppleIcon from "../assets/appleIcon.svg";
import { useNavigate } from "react-router-dom";
const Signin = () => {
  const navigate = useNavigate();

  const [signInDetails, setSignInDetails] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setSignInDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(signInDetails);
  };

  const toDashboard = () => {
    if (signInDetails.email && signInDetails.password) {
      navigate("/dashboard");
    }
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
          <button
            className="google"
            onClick={() => toDashboard(navigate("/dashboard"))}
          >
            <img src={GoogleIcon} alt="google-icon" />
            Sign in with Google
          </button>
          <button
            className="apple"
            onClick={() => toDashboard(navigate("/dashboard"))}
          >
            <img src={AppleIcon} alt="apple-icon" />
            Sign in with Apple
          </button>
        </div>
        <div className="form">
          <div className="wrapper">
            <label>Email address</label>
            <input
              name="email"
              type="email"
              value={signInDetails.email}
              onChange={(e) => handleInput(e)}
            />
          </div>
          <div className="wrapper">
            <label>Password</label>
            <input
              name="password"
              value={signInDetails.password}
              type="password"
              onChange={(e) => handleInput(e)}
            />
          </div>
          <p className="forgot_password">Forgot Password ?</p>
          <button className="sign_in_button" onClick={toDashboard}>
            Sign In
          </button>
        </div>

        <p className="no_account">
          Don’t have an account? <span className="colored">Register here</span>
        </p>
      </section>
    </div>
  );
};

export default Signin;
