import React, { useState } from "react";

export default function Login({ switchMode }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      window.location.reload();
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      {error && <p className="text-red-500">{error}</p>}
      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 border rounded mb-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 border rounded mb-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="w-full bg-blue-500 text-white p-2 rounded"
        onClick={handleLogin}
      >
        Login
      </button>
      <p className="mt-2 text-sm">
        Don't have an account?{" "}
        <span className="text-blue-500 cursor-pointer" onClick={switchMode}>
          Register
        </span>
      </p>
    </div>
  );
}
