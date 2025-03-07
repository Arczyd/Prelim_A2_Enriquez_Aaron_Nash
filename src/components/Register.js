import React, { useState } from "react";

export default function Register({ switchMode }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.some((u) => u.email === email)) {
      setMessage("Email already registered");
      return;
    }
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
    setMessage("Registration successful. You can now login.");
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Register</h2>
      {message && <p className="text-green-500">{message}</p>}
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
        className="w-full bg-green-500 text-white p-2 rounded"
        onClick={handleRegister}
      >
        Register
      </button>
      <p className="mt-2 text-sm">
        Already have an account?{" "}
        <span className="text-blue-500 cursor-pointer" onClick={switchMode}>
          Login
        </span>
      </p>
    </div>
  );
}
