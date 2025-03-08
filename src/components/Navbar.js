import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ profilePic, username, onLogout, darkMode }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      onLogout();
      navigate("/");
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
      } shadow-sm fixed-top px-4`}
    >
      <div className="container-fluid">
        <span className="navbar-brand fw-bold">AST</span>

        <div className="ms-auto d-flex align-items-center">
          <Link
            to="/home"
            className={`nav-link me-3 ${darkMode ? "text-white" : "text-dark"}`}
          >
            Home
          </Link>
          <Link
            to="/profile"
            className={`nav-link me-3 ${darkMode ? "text-white" : "text-dark"}`}
          >
            Profile
          </Link>
          <Link
            to="/settings"
            className={`nav-link me-3 ${darkMode ? "text-white" : "text-dark"}`}
          >
            Settings
          </Link>

          <div className="d-flex align-items-center">
            <img
              src={profilePic || "https://via.placeholder.com/40"}
              alt="Profile"
              className="rounded-circle me-2"
              width="40"
              height="40"
            />
            {username && <span className={`me-2 ${darkMode ? "text-white" : "text-dark"}`}>{username}</span>}
            <button
              className={`btn btn-sm ${darkMode ? "btn-light" : "btn-dark"}`}
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}