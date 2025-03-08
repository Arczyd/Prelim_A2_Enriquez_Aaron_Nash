import React from "react";

export default function Home() {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    window.location.reload();
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
        <a className="navbar-brand" href="#">
          MyApp
        </a>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Profile
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Settings
            </a>
          </li>
          <li className="nav-item">
            <button className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </nav>

      {/* Welcome Message */}
      <div className="container text-center mt-5">
        <h2>Welcome, {user.username}!</h2>
        <p>This is your dashboard.</p>
      </div>
    </div>
  );
}
