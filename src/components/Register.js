import React, { useState } from "react";

export default function Register({ switchMode }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleRegister = () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (!username || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Invalid email format.");
      return;
    }

    if (password.length < 12) {
      alert("Password must be at least 12 characters.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (
      users.some((user) => user.email === email || user.username === username)
    ) {
      alert("Account already exists. Try a different email or username.");
      return;
    }

    users.push({ username, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful! You can now login.");
    switchMode();
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">
        <h3 className="text-center">Register</h3>
        <input
          type="text"
          className="form-control my-2"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          className="form-control my-2"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="form-control my-2"
          placeholder="Password (12+ characters)"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          className="form-control my-2"
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button className="btn btn-primary w-100 mt-2" onClick={handleRegister}>
          Register
        </button>
        <p className="text-center mt-3">
          Already have an account?{" "}
          <span
            className="text-primary"
            style={{ cursor: "pointer" }}
            onClick={switchMode}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
