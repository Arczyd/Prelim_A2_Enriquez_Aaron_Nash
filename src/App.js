import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
import Intro from "./components/Intro";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Settings from "./components/Settings";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profilePic, setProfilePic] = useState("");
  const [username, setUsername] = useState(""); // New state for username
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser   "));
    if (user) {
      setIsLoggedIn(true);
      setProfilePic(user.profilePic || "");
      setUsername(user.username || ""); // Set username from user object
    }

    const storedDarkMode = JSON.parse(localStorage.getItem("darkMode"));
    if (storedDarkMode !== null) {
      setDarkMode(storedDarkMode);
    }
  }, []);

  const handleLogin = (user) => {
    localStorage.setItem("loggedInUser   ", JSON.stringify(user));
    setIsLoggedIn(true);
    setProfilePic(user.profilePic || "");
    setUsername(user.username || ""); // Set username on login
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser   ");
    setIsLoggedIn(false);
    setProfilePic("");
    setUsername(""); // Clear username on logout
  };

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
  };

  return (
    <Router>
      <MainContent
        isLoggedIn={isLoggedIn}
        onLogin={handleLogin}
        onLogout={handleLogout}
        profilePic={profilePic}
        username={username} // Pass username to MainContent
        setProfilePic={setProfilePic}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
    </Router>
  );
}

function MainContent({
  isLoggedIn,
  onLogin,
  onLogout,
  profilePic,
  username, // Receive username
  setProfilePic,
  darkMode,
  toggleDarkMode,
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
      {isLoggedIn && (
        <Navbar
          profilePic={profilePic}
          username={username} // Pass username to Navbar
          onLogout={onLogout}
          darkMode={darkMode}
        />
      )}
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/home" replace /> : <Intro />} />
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/home" replace />
            ) : (
              <Login
                onLogin={(user) => {
                  onLogin(user);
                  navigate("/home");
                }}
              />
            )
          }
        />
        <Route
          path="/register"
          element={
            isLoggedIn ? (
              <Navigate to="/home" replace />
            ) : (
              <Register />
            )
          }
        />
        <Route
          path="/home"
          element={
            isLoggedIn ? (
              <Home darkMode={darkMode} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/profile"
          element={
            isLoggedIn ? (
              <Profile setProfilePic={setProfilePic} profilePic={profilePic} darkMode={darkMode} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/settings"
          element={
            isLoggedIn ? (
              <Settings darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
      {/* Footer */}
      <Footer darkMode={darkMode} />
    </>
  );
}