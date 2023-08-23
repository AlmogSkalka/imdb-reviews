import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";

export default function WelcomePage() {
  const [ShowPassword, setShowPassword] = useState(false);

  const [ShowRegistrationPassword, setShowRegistrationPassword] =
    useState(false);

  //show signin password
  const togglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  //show signup password
  const toggleRegistrationPassword = () => {
    setShowRegistrationPassword((prevState) => !prevState);
  };
  return (
    <div className="container">
      <div className="side-div">
        <h2>Welcome to IMDB Articles & Reviews platform! </h2>
        <p>
          Here you will be able to search articles by keywords, and add your
          reviews to the articles
        </p>
        <button className="sign-up">Sign up</button>
        <button className="log-in">Log in</button>
        <button className="without-user" title="Without registering...">
          Continue freely
        </button>
      </div>
      {/* Login & Signup forms */}
      {/* Login Form */}
      <div className="log-in-form">
        <h1>Login</h1>
        <input
          type="text"
          className="text-input"
          placeholder="email@email.com"
        />
        <br />
        <br />
        <input
          type={ShowPassword ? "text" : "password"}
          className="text-input"
          placeholder="Password"
        />{" "}
        {ShowPassword ? (
          <FaIcons.FaRegEyeSlash onClick={togglePassword} />
        ) : (
          <FaIcons.FaRegEye onClick={togglePassword} />
        )}
        <br />
        <br />
        <button className="log-in-btn">Login!</button>
      </div>
      {/* Signup Form */}
      <div className="sign-up-form">
        <h1>Signup</h1>
        <input
          type="text"
          className="text-input"
          placeholder="email@email.com"
        />
        <br />
        <br />
        <input
          type={ShowRegistrationPassword ? "text" : "password"}
          className="text-input"
          placeholder="Password"
        />{" "}
        {ShowRegistrationPassword ? (
          <FaIcons.FaRegEyeSlash onClick={toggleRegistrationPassword} />
        ) : (
          <FaIcons.FaRegEye onClick={toggleRegistrationPassword} />
        )}
        <br />
        <br />
        <button className="sign-up-btn">Sign up!</button>
      </div>
    </div>
  );
}
