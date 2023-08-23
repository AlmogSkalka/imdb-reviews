import { useState } from "react";
import "./welcome.css";
import SignupForm from "./Comps/SignupForm";
import SigninForm from "./Comps/SigninForm";

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
  const [showLogin, setShowLogin] = useState(true);
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

  const toggleLogSignPage = () => {
    setShowLogin((prevState) => !prevState);
  };
  return (
    <div className="container">
      <div className="side-div">
        <h2>Welcome to IMDB Articles & Reviews platform! </h2>
        <p>
          Here you will be able to search articles by keywords, save loved
          articles and add your reviews to the articles
        </p>
        {showLogin ? (
          <button className="sign-up" onClick={toggleLogSignPage}>
            Sign up
          </button>
        ) : (
          <button className="log-in" onClick={toggleLogSignPage}>
            Log in
          </button>
        )}
        <button className="without-user" title="Without registering...">
          Continue freely
        </button>
      </div>

      {/* Login & Signup forms */}

      <div className="forms">
        {showLogin ? (
          <SigninForm
            formData={SigninForm}
            showPassword={ShowPassword}
            togglePassword={togglePassword}
            handleInputChange={handleLoginInputChange}
            handleSubmit={handleLoginSubmit}
          />
        ) : (
          <SignupForm
            formData={signupForm}
            showPassword={ShowRegistrationPassword}
            togglePassword={toggleRegistrationPassword}
            handleInputChange={handleSignupInputChange}
            handleSubmit={handleSignupSubmit}
          />
        )}
      </div>
    </div>
  );
}
