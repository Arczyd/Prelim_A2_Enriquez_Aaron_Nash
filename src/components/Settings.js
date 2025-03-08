import React, { useState, useEffect } from "react";

const Settings = ({ darkMode, toggleDarkMode }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [language, setLanguage] = useState("English");

  useEffect(() => {}, [darkMode]);

  const handleSaveSettings = () => {
    alert("Settings saved successfully!");
  };

  return (
    <div
      className={`container-fluid py-5 ${
        darkMode ? "bg-dark text-white" : "bg-light text-dark"
      }`}
      style={{ minHeight: "100vh" }}
    >
      <div className="row justify-content-center pt-5">
        <div className="col-md-8">
          <h2 className="text-center mb-4">
            <strong>App Settings</strong>
          </h2>

          <div className="mb-4">
            <h4>Theme Settings</h4>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="darkModeSwitch"
                checked={darkMode}
                onChange={toggleDarkMode}
              />
              <label className="form-check-label" htmlFor="darkModeSwitch">
                Enable Dark Mode
              </label>
            </div>
          </div>

          <div className="mb-4">
            <h4>Language Preferences</h4>
            <label htmlFor="language" className="form-label">
              Select Language
            </label>
            <select
              className="form-select"
              id="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
              <option value="German">German</option>
              <option value="Chinese">Chinese</option>
            </select>
          </div>

          <div className="mb-4">
            <h4>Notification Settings</h4>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="notificationsSwitch"
                checked={notificationsEnabled}
                onChange={() => setNotificationsEnabled(!notificationsEnabled)}
              />
              <label className="form-check-label" htmlFor="notificationsSwitch">
                Enable Notifications
              </label>
            </div>
          </div>

          <div className="text-center mb-5">
            <button className="btn btn-primary" onClick={handleSaveSettings}>
              Save Changes
            </button>
          </div>

          <div className="contact-us text-center mt-5">
            <h4>Contact Us</h4>
            <p>
              If you have any questions, feel free to reach out to us!
              <br />
              Email: <a href="mailto:support@astapp.com">support@astapp.com</a>
              <br />
              Phone: +1 (234) 567-8901
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
