import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../styles/auth.css';

const Signin = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("Please fill in all fields!");
      return;
    }
    setError("");
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const matchedUser = users.find(
      (user) => user.email === form.email && user.password === form.password
    );

    if (!matchedUser) {
      setError("Invalid email or password!");
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(matchedUser));

    setForm({ email: "", password: "" });

    setTimeout(() => {
      setSuccess('');
      window.location.href = '/';
    }, 2000);
  };

  return (
    <div className="auth-bg">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <div style={{ color: "#fc6b6e" }}>{error}</div>}
        <label className="auth-label" htmlFor="email">Email</label>
        <input
          className="auth-input"
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <label className="auth-label" htmlFor="password">Password</label>
        <input
          className="auth-input"
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <button type="submit" className="auth-btn">Login</button>
        <Link to="/signup" className="auth-link">Sign Up</Link>
        <br />
        <Link to="/forgot-password"
            className="auth-link"
            style={{ display: 'flex', justifyContent: 'center' }}
        >
            Forgot password?
        </Link>
      </form>
    </div>
  );
};

export default Signin;
