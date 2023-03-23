import React from "react";
import "./User.css";

const User = ({ name, email, avatar, bio }) => {
  return (
    <div className="user-card">
      <div className="user-avatar">
        <img src={avatar} alt="User Avatar" />
      </div>
      <div className="user-details">
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{bio}</p>
      </div>
    </div>
  );
};

export default User;
