import React from "react";
import * as FaIcons from "react-icons/fa";

function SigninForm({
  formData,
  showPassword,
  togglePassword,
  handleInputChange,
  handleSubmit,
}) {
  return (
    <div className="log-in-form">
      <h1>Log in</h1>
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
      <button className="log-in-btn" onClick={handleSubmit}>
        Sign up!
      </button>
    </div>
  );
}

export default SigninForm;
