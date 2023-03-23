import React from "react";
import "./Project.css";

const Project = ({
  image,
  title,
  technologies,
  liveLink,
  codeLink,
  description,
}) => {
  return (
    <div className="Card">
      <img src={image} alt={title} />
      <div className="Card-details">
        <h3 className="Card-title">{title}</h3>
        <p className="Card-description">{description}</p>
        <ul className="Card-list">
          {technologies.map((ele) => {
            return <li>{ele}</li>;
          })}
        </ul>
        <div className="Card-links">
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            Live
          </a>
          <a href={codeLink} target="_blank" rel="noopener noreferrer">
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
