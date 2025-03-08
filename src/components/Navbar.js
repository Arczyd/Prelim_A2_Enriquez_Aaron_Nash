import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ onLogout, profilePic }) {
  const [user, setUser] = useState({ username: "" });

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser "));
    if (loggedInUser) setUser(loggedInUser);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top px-4">
      <div className="container-fluid">
        <span className="navbar-brand fw-bold">AST</span>

        <div className="ms-auto d-flex align-items-center">
          <Link to="/home" className="nav-link me-3">
            Home
          </Link>
          <Link to="/profile" className="nav-link me-3">
            Profile
          </Link>
          <Link to="/settings" className="nav-link me-3">
            Settings
          </Link>

          <div className="d-flex align-items-center">
            <img
              src={profilePic || "https://via.placeholder.com/50"}
              alt="Profile"
              className="rounded-circle me-2"
              width="40"
              height="40"
            />
            <span className="fw-bold me-3">{user.username || "Guest"}</span>
            <button className="btn btn-danger btn-sm" onClick={onLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
