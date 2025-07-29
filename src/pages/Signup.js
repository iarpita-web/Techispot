import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/auth.css';

const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const [success, setSuccess] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      setError("All fields are required!");
      return;
    }
    setError("");
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some(u => u.email === form.email)) {
      setError("An account with this email already exists!");
      setSuccess(false);
      return;
    }

    users.push({ ...form });
    localStorage.setItem("users", JSON.stringify(users));

    setError('');
    setSuccess('Account created successfully! You can now sign in.');
    setForm({ name: "", email: "", password: "" });
    setTimeout(() => {
      setSuccess(true);
      window.location.href = '/';
    }, 500);
  };

  return (
    <div className="auth-bg">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        {error && <div style={{ color: "#fc6b6e" }}>{error}</div>}
        <label className="auth-label" htmlFor="name">Name</label>
        <input
          className="auth-input"
          id="name"
          name="name"
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
        />
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
        {success && <div style={{ color: '#42e39a', marginBottom: '1rem', fontWeight: '600' }}>{success}</div>}
        <button type="submit" className="auth-btn">Sign Up</button>
        <Link to="/sign-in" className="auth-link">Login</Link>
      </form>
    </div>
  );
};

export default Signup;
