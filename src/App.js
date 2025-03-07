import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";

export default function App() {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  return user ? <Home /> : <Auth />;
}

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        {isLogin ? (
          <Login switchMode={() => setIsLogin(false)} />
        ) : (
          <Register switchMode={() => setIsLogin(true)} />
        )}
      </div>
    </div>
  );
}
