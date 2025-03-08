import React, { useState } from "react";

export default function Login({ switchMode }) {
  const [identifier, setIdentifier] = useState(""); // Username or Email
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (!identifier || !password) {
      alert("Please fill in all fields.");
      return;
    }

    const user = users.find(
      (user) => user.email === identifier || user.username === identifier
    );

    if (!user) {
      alert("Account not found.");
      return;
    }

    if (user.password !== password) {
      alert("Incorrect password.");
      return;
    }

    localStorage.setItem("loggedInUser", JSON.stringify(user));
    alert("Login successful!");
    window.location.reload();
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">
        <h3 className="text-center">Login</h3>
        <input
          type="text"
          className="form-control my-2"
          placeholder="Username or Email"
          onChange={(e) => setIdentifier(e.target.value)}
        />
        <input
          type="password"
          className="form-control my-2"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-success w-100 mt-2" onClick={handleLogin}>
          Login
        </button>
        <p className="text-center mt-3">
          Don't have an account?{" "}
          <span
            className="text-primary"
            style={{ cursor: "pointer" }}
            onClick={switchMode}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}
