import React from "react";
import * as FaIcons from "react-icons/fa";

function SignupForm({
  formData,
  showPassword,
  togglePassword,
  handleInputChange,
  handleSubmit,
}) {
  return (
    <div className="sign-up-form">
      <h1>Sign up</h1>
      <input
        type="text"
        className="text-input"
        placeholder="email@email.com"
        name="username"
        value={formData.username}
        onChange={handleInputChange}
      />
      <br />
      <br />
      <input
        type={showPassword ? "text" : "password"}
        className="text-input"
        placeholder="Password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
      />{" "}
      {showPassword ? (
        <FaIcons.FaRegEyeSlash onClick={togglePassword} />
      ) : (
        <FaIcons.FaRegEye onClick={togglePassword} />
      )}
      <br />
      <br />
      <button className="sign-up-btn" onClick={handleSubmit}>
        Sign up!
      </button>
    </div>
  );
}

export default SignupForm;
