import React from "react";

export default function welcome() {
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
      <div className="log-in-form">
        <h1>Login</h1>
        <input type="text" className="text-input" placeholder="Username" />
        <br />
        <input type="password" className="text-input" placeholder="Password" />
      </div>
    </div>
  );
}
