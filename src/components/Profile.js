import React, { useEffect, useState } from "react";

export default function Profile({ setProfilePic, profilePic }) {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
    address: "",
    contact: "",
    bio: "",
    profilePic: "", // Stores the profile picture URL
  });

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [message, setMessage] = useState("");

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) setUser(loggedInUser);
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
        setProfilePic(reader.result); // Update profile picture in Navbar
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (!user.username || !user.email) {
      setMessage("Username and Email are required.");
      return;
    }

    if (newPassword || confirmPassword) {
      if (!oldPassword) {
        setMessage("Please enter your old password.");
        return;
      }

      if (oldPassword !== user.password) {
        setMessage("Old password is incorrect.");
        return;
      }

      if (newPassword !== confirmPassword) {
        setMessage("New password and confirm password do not match.");
        return;
      }

      if (newPassword.length < 6) {
        setMessage("Password must be at least 6 characters long.");
        return;
      }

      user.password = newPassword;
    }

    localStorage.setItem("loggedInUser", JSON.stringify(user));

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let updatedUsers = users.map((u) => (u.email === user.email ? user : u));
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setMessage("Profile updated successfully!");
  };

  return (
    <div className="container mt-5 pt-5">
      <h2 className="text-center">Edit Profile</h2>

      <div className="card shadow p-4 mt-3">
        {message && <div className="alert alert-info">{message}</div>}

        {/* Profile Picture Section */}
        <div className="text-center mb-3">
          <img
            src={
              user.profilePic || profilePic || "https://via.placeholder.com/100"
            }
            alt="Profile"
            className="rounded-circle"
            width="100"
            height="100"
          />
          <input
            type="file"
            className="form-control mt-2"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>

        {/* User Info Section */}
        <h4>User Info</h4>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>

        {/* Change Password Section */}
        <h4 className="mt-4">Change Password</h4>
        <div className="mb-3">
          <label className="form-label">Old Password</label>
          <div className="input-group">
            <input
              type={showOldPassword ? "text" : "password"}
              className="form-control"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={() => setShowOldPassword(!showOldPassword)}
            >
              {showOldPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">New Password</label>
          <div className="input-group">
            <input
              type={showNewPassword ? "text" : "password"}
              className="form-control"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
            >
              {showNewPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Confirm New Password</label>
          <div className="input-group">
            <input
              type={showConfirmPassword ? "text" : "password"}
              className="form-control"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        {/* Personal Info Section */}
        <h4 className="mt-4">Personal Info</h4>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={user.address}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Contact</label>
          <input
            type="text"
            className="form-control"
            name="contact"
            value={user.contact}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Bio</label>
          <textarea
            className="form-control"
            name="bio"
            value={user.bio}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Save Button */}
        <button className="btn btn-primary w-100" onClick={handleSave}>
          Save Changes
        </button>
      </div>
    </div>
  );
}
