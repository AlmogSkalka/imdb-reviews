import { useState } from "react";
import "./welcome.css";
import SignupForm from "./Comps/SignupForm";
import LoginForm from "./Comps/LoginForm";

export default function WelcomePage() {
  // Form Data
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });
  const [signupForm, setSignupForm] = useState({
    username: "",
    password: "",
    fullName: "",
  });

  // UI States
  const [showPassword, setShowPassword] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [loginPasswordStrExist, setLoginPasswordStrExist] = useState(false);
  const [signupPasswordStrExist, setSignupPasswordStrExist] = useState(false);

  // Handlers
  const handleLoginInputChange = (event) => {
    const { name, value } = event.target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });

    //making sure password text exists and beyond
    setLoginPasswordStrExist(name === "password" && value.length > 0);
    // name === "password"
    //   ? value.length > 0
    //     ? setLoginPasswordStrExist(true)
    //     : setLoginPasswordStrExist(false)
    //   : null;
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    if (loginForm.username !== "" && loginForm.password !== "")
      console.log("Login Form submitted with data:", loginForm);
    else console.log("You didnt inserted login data");
  };

  const handleSignupInputChange = (event) => {
    const { name, value } = event.target;
    setSignupForm({
      ...signupForm,
      [name]: value,
    });

    //making sure password text exists and beyond
    setSignupPasswordStrExist(name === "password" && value.length > 0);
    // name === "password"
    //   ? value.length > 0
    //     ? setSignupPasswordStrExist(true)
    //     : setSignupPasswordStrExist(false)
    //   : null;
  };

  const handleSignupSubmit = (event) => {
    event.preventDefault();
    if (
      signupForm.fullName !== "" &&
      signupForm.username !== "" &&
      signupForm.password !== ""
    )
      console.log("Signup Form submitted with data:", signupForm);
    else console.log("You didnt inserted signup data");
  };

  // Toggles
  const toggleLoginPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const toggleRegistrationPassword = () => {
    setShowSignupPassword((prevState) => !prevState);
  };

  const togglePage = () => {
    loginForm.password.length > 0
      ? setLoginPasswordStrExist(true)
      : setLoginPasswordStrExist(false);
    signupForm.password.length > 0
      ? setSignupPasswordStrExist(true)
      : setSignupPasswordStrExist(false);
    setShowLogin((prevState) => !prevState);
  };

  return (
    <div className={showLogin ? "container" : "signup-container"}>
      <div className="side-div">
        <h2>Welcome to IMDB Articles & Reviews platform! </h2>
        <p>
          Here you will be able to search articles by keywords, save loved
          articles and add your reviews to the articles
        </p>
        {showLogin ? (
          <>
            {" "}
            <button className="sign-up" onClick={togglePage}>
              Sign up
            </button>
            <button className="without-user" title="Without registering...">
              Continue freely
            </button>
          </>
        ) : (
          <>
            <button className="log-in" onClick={togglePage}>
              Log in
            </button>
          </>
        )}
      </div>

      {/* Login & Signup forms */}

      <div className="forms">
        {showLogin ? (
          <LoginForm
            formData={loginForm}
            showPassword={showPassword}
            togglePassword={toggleLoginPassword}
            handleInputChange={handleLoginInputChange}
            handleSubmit={handleLoginSubmit}
            showPasswordIcon={loginPasswordStrExist}
            togglePasswordIcon={(prevState) =>
              setLoginPasswordStrExist(!prevState)
            }
          />
        ) : (
          <SignupForm
            formData={signupForm}
            showPassword={showSignupPassword}
            togglePassword={toggleRegistrationPassword}
            handleInputChange={handleSignupInputChange}
            handleSubmit={handleSignupSubmit}
            showPasswordIcon={signupPasswordStrExist}
            togglePasswordIcon={(prevState) =>
              setSignupPasswordStrExist(!prevState)
            }
          />
        )}
      </div>
    </div>
  );
}
