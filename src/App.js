import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useLocation,
  Navigate, // Import Navigate here
} from "react-router-dom";
import Intro from "./components/Intro";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profilePic, setProfilePic] = useState(""); // Add profilePic state

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser "));
    if (user) {
      setIsLoggedIn(true);
      setProfilePic(user.profilePic || ""); // Load profile picture from localStorage
    }
  }, []);

  const handleLogin = (user) => {
    localStorage.setItem("loggedInUser ", JSON.stringify(user));
    setIsLoggedIn(true);
    setProfilePic(user.profilePic || ""); // Ensure profile picture is updated
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser ");
    setIsLoggedIn(false);
    setProfilePic(""); // Reset profile picture on logout
  };

  return (
    <Router>
      <MainContent
        isLoggedIn={isLoggedIn}
        onLogin={handleLogin}
        onLogout={handleLogout}
        profilePic={profilePic}
        setProfilePic={setProfilePic} // Pass to child components
      />
    </Router>
  );
}

function MainContent({
  isLoggedIn,
  onLogin,
  onLogout,
  profilePic,
  setProfilePic,
}) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleBackButton = () => {
      if (location.pathname === "/login" || location.pathname === "/register") {
        navigate("/");
      }
    };

    window.addEventListener("popstate", handleBackButton);
    return () => window.removeEventListener("popstate", handleBackButton);
  }, [location, navigate]);

  return (
    <>
      {isLoggedIn && <Navbar profilePic={profilePic} onLogout={onLogout} />}
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route
          path="/login"
          element={
            <Login
              onLogin={(user) => {
                onLogin(user);
                navigate("/home");
              }}
            />
          }
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/profile"
          element={
            isLoggedIn ? (
              <Profile setProfilePic={setProfilePic} profilePic={profilePic} />
            ) : (
              <Navigate to="/login" /> // Redirect to login if not logged in
            )
          }
        />
      </Routes>
    </>
  );
}
