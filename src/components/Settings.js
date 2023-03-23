import React from "react";
import "./Settings.css";

const Settings = ({ name, email, password, notifications }) => {
  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <form>
        <div className="form-group">
          <label>Name</label>
          <input type="text" value={name} />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" value={email} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" value={password} />
        </div>
        <div className="form-group">
          <label>Notifications</label>
          <div className="checkbox">
            <input type="checkbox" checked={notifications} />
            <span className="checkmark"></span>
          </div>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Settings;
