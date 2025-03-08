import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) =>
        (u.email === email || u.username === email) && u.password === password
    );

    if (user) {
      localStorage.setItem("loggedInUser ", JSON.stringify(user)); // Save logged-in user
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
        <div className="input-group mb-3">
          <input
            type={showPassword ? "text" : "password"} // Toggle password visibility
            className="form-control"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => setShowPassword(!showPassword)} // Toggle showPassword state
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
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