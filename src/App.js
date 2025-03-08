import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  return user ? <Home /> : <Auth />;
}

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  return isLogin ? (
    <Login switchMode={() => setIsLogin(false)} />
  ) : (
    <Register switchMode={() => setIsLogin(true)} />
  );
}
