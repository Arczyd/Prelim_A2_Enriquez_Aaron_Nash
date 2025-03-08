import React, { useState, useEffect } from "react";

export default function Profile({ setProfilePic, profilePic, darkMode }) {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
    address: "",
    contact: "",
    bio: "",
    profilePic: "",
  });

  const [originalUser, setOriginalUser] = useState({});
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser   "));
    if (loggedInUser) {
      setUser(loggedInUser);
      setOriginalUser(loggedInUser);
    }
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser((prevUser) => ({
          ...prevUser,
          profilePic: reader.result,
        }));
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const validatePasswordChange = () => {
    if (newPassword !== confirmPassword) {
      setMessage("New password and confirm password do not match.");
      return false;
    }
    if (newPassword.length < 6) {
      setMessage("Password must be at least 6 characters long.");
      return false;
    }
    return true;
  };

  const handleSave = () => {
    const confirmSave = window.confirm(
      "Are you sure you want to save changes?"
    );
    if (!confirmSave) {
      return;
    }

    if (!user.username || !user.email) {
      setMessage("Username and Email are required.");
      return;
    }

    if (newPassword || confirmPassword) {
      if (!oldPassword) {
        setMessage("Please enter your old password.");
        return;
      }

      if (oldPassword !== originalUser.password) {
        setMessage("Old password is incorrect.");
        return;
      }

      if (!validatePasswordChange()) {
        return;
      }

      user.password = newPassword;
    }

    localStorage.setItem("loggedInUser   ", JSON.stringify(user));

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let updatedUsers = users.map((u) => (u.email === user.email ? user : u));
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setMessage("Profile updated successfully!");

    window.location.reload();
  };

  return (
    <div
      className={`container-fluid min-vh-100 d-flex flex-column ${
        darkMode ? "bg-dark text-white" : "bg-light text-dark"
      }`}
    >
      <div className="container mt-5 pt-5 pb-5">
        <h2 className="text-center mb-4">Edit Profile</h2>

        <div className="text-center mb-4">
          <img
            src={
              user.profilePic || profilePic || "https://via.placeholder.com/100"
            }
            alt="Profile"
            className="rounded-circle mb-3"
            width="120"
            height="120"
          />
          <input
            type="file"
            className="form-control d-inline-block w-auto mt-3"
            accept="image/*"
            onChange={handleImageChange}
          />
          <small className="d-block mt-2 text-muted">
            Change Profile Picture
          </small>
        </div>

        {message && <div className="alert alert-info mb-4">{message}</div>}

        <div className="row mb-4">
          <div className="col-md-6">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={user.username}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-4">
          <h4>Change Password</h4>
          <label className="form-label">Old Password</label>
          <div className="input-group">
            <input
              type={showOldPassword ? "text" : "password"}
              className="form-control"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <button
              className={`btn ${
                darkMode ? "btn-light" : "btn-outline-secondary"
              }`}
              type="button"
              onClick={() => setShowOldPassword(!showOldPassword)}
            >
              {showOldPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <div className="mb-4">
          <label className="form-label">New Password</label>
          <div className="input-group">
            <input
              type={showNewPassword ? "text" : "password"}
              className="form-control"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button
              className={`btn ${
                darkMode ? "btn-light" : "btn-outline-secondary"
              }`}
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
            >
              {showNewPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <div className="mb-4">
          <label className="form-label">Confirm New Password</label>
          <div className="input-group">
            <input
              type={showConfirmPassword ? "text" : "password"}
              className="form-control"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              className={`btn ${
                darkMode ? "btn-light" : "btn-outline-secondary"
              }`}
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-6">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={user.name}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              name="address"
              value={user.address}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-6">
            <label className="form-label">Contact</label>
            <input
              type="text"
              className="form-control"
              name="contact"
              value={user.contact}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Bio</label>
            <textarea
              className="form-control"
              name="bio"
              value={user.bio}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        <div className="text-center">
          <button
            className={`btn ${darkMode ? "btn-light" : "btn-primary"} w-20`}
            onClick={handleSave}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
