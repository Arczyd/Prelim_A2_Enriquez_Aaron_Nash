import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) =>
        (u.email === email || u.username === email) && u.password === password
    );

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user)); // Save logged-in user
      onLogin(user);
      alert("Login successful!"); // ✅ Show successful login popup
      navigate("/home");
    } else {
      alert("Invalid email/username or password.");
    }
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
      <h2 className="fw-bold mb-4">Login</h2>
      <form className="w-25" onSubmit={handleLogin}>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Username or Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn btn-primary w-100 rounded-pill">
          Login
        </button>
      </form>
      <p className="mt-3">
        Don't have an account? <a href="/register">Register</a>
      </p>
    </div>
  );
}
