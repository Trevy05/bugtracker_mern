import React, { useState } from "react";
import "./Team.css";

const Team = ({ teamName, teamMembers }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="team-container">
      <div className="team-header" onClick={() => setExpanded(!expanded)}>
        <h2>{teamName}</h2>
        <i className={`fas fa-chevron-${expanded ? "up" : "down"}`}></i>
      </div>
      {expanded && (
        <div className="team-members">
          {teamMembers.map((member) => (
            <div className="team-member" key={member.id}>
              <div className="member-info">
                <img src={member.profilePic} alt={member.name} />
                <div className="member-details">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                  <p>{member.contactInfo}</p>
                </div>
              </div>
              <p className={`member-status ${member.status}`}>
                {member.status}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Team;
