import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/auth.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email address.");
      return;
    }
    setError("");
    setMsg("If an account exists, you will receive a reset link.");
    // TODO: Backend call for reset
  };

  return (
    <div className="auth-bg">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2>Forgot Password</h2>
        {error && <div style={{ color: "#fc6b6e" }}>{error}</div>}
        {msg && <div style={{ color: "#42e39a" }}>{msg}</div>}
        <label className="auth-label" htmlFor="email">Email</label>
        <input
          className="auth-input"
          id="email"
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button type="submit" className="auth-btn">Send Reset Link</button>
        <Link to="/sign-in" className="auth-link">Back to Login</Link>
      </form>
    </div>
  );
};

export default ForgotPassword;
