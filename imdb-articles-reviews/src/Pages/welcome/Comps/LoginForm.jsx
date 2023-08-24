import React from "react";
import * as FaIcons from "react-icons/fa";

function LoginForm({
  formData,
  showPassword,
  togglePassword,
  handleInputChange,
  handleSubmit,
  showPasswordIcon,
  togglePasswordIcon,
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
      <div className="password-icon">
        {showPasswordIcon ? (
          showPassword ? (
            <FaIcons.FaRegEyeSlash onClick={togglePassword} />
          ) : (
            <FaIcons.FaRegEye onClick={togglePassword} />
          )
        ) : null}
      </div>
      <br />
      <br />
      <button className="log-in-btn" onClick={handleSubmit}>
        Log in!
      </button>
    </div>
  );
}

export default LoginForm;
