import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

export default function Auth({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg">
        {isLogin ? (
          <Login onSuccess={onLogin} switchMode={() => setIsLogin(false)} />
        ) : (
          <Register switchMode={() => setIsLogin(true)} />
        )}
      </div>
    </div>
  );
}
