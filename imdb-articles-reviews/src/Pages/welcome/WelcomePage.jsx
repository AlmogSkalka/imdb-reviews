import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import "./welcome.css";

export default function WelcomePage() {
  const [ShowPassword, setShowPassword] = useState(false);
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });
  const [signupForm, setSignupForm] = useState({
    username: "",
    password: "",
  });

  const [ShowRegistrationPassword, setShowRegistrationPassword] =
    useState(false);

  const handleLoginInputChange = (event) => {
    const { name, value } = event.target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    console.log("Login Form submitted with data:", loginForm);
  };

  const handleSignupInputChange = (event) => {
    const { name, value } = event.target;
    setSignupForm({
      ...signupForm,
      [name]: value,
    });
  };

  const handleSignupSubmit = (event) => {
    event.preventDefault();
    console.log("Signup Form submitted with data:", signupForm);
  };

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
      <div className="forms">
        <div className="log-in-form">
          <h1>Login</h1>
          <input
            type="text"
            className="text-input"
            name="username"
            placeholder="email@email.com"
            value={loginForm.username}
            onChange={handleLoginInputChange}
          />
          <br />
          <br />
          <input
            type={ShowPassword ? "text" : "password"}
            className="text-input"
            name="password"
            placeholder="Password"
            value={loginForm.password}
            onChange={handleLoginInputChange}
          />{" "}
          {ShowPassword ? (
            <FaIcons.FaRegEyeSlash onClick={togglePassword} />
          ) : (
            <FaIcons.FaRegEye onClick={togglePassword} />
          )}
          <br />
          <br />
          <button className="log-in-btn" onClick={handleLoginSubmit}>
            Login!
          </button>
        </div>

        {/* Signup Form */}
        <div className="sign-up-form">
          <h1>Signup</h1>
          <input
            type="text"
            className="text-input"
            placeholder="email@email.com"
            name="username"
            value={signupForm.username}
            onChange={handleSignupInputChange}
          />
          <br />
          <br />
          <input
            type={ShowRegistrationPassword ? "text" : "password"}
            className="text-input"
            placeholder="Password"
            name="password"
            value={signupForm.password}
            onChange={handleSignupInputChange}
          />{" "}
          {ShowRegistrationPassword ? (
            <FaIcons.FaRegEyeSlash onClick={toggleRegistrationPassword} />
          ) : (
            <FaIcons.FaRegEye onClick={toggleRegistrationPassword} />
          )}
          <br />
          <br />
          <button className="sign-up-btn" onClick={handleSignupSubmit}>
            Sign up!
          </button>
        </div>
      </div>
    </div>
  );
}
