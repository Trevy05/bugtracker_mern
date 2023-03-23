import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faTimes } from "@fortawesome/free-solid-svg-icons";

import "./Ticket.css";

const Ticket = (props) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="ticket">
      <div className="ticket-header underline" onClick={handleClick}>
        <div className="ticket-header-id">{props.id}</div>
        <div className="ticket-header-status">{props.status}</div>
        <div className="ticket-header-title">{props.title}</div>
        <div className="ticket-header-arrow">
          <FontAwesomeIcon icon={faArrowDown} rotation={expanded ? 180 : 0} />
        </div>
      </div>
      {expanded && (
        <div className="ticket-details">
          <div className="ticket-details-header">
            <div className="ticket-details-header-text">Details:</div>
            <div className="ticket-details-header-close" onClick={handleClick}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
          </div>
          <div className="ticket-details-description">{props.description}</div>
          <div className="ticket-details-footer">
            <div className="ticket-details-footer-item">
              <div className="ticket-details-footer-label">Created:</div>
              <div className="ticket-details-footer-value">
                {props.createdAt}
              </div>
            </div>
            <div className="ticket-details-footer-item">
              <div className="ticket-details-footer-label">Updated:</div>
              <div className="ticket-details-footer-value">
                {props.updatedAt}
              </div>
            </div>
            <div className="ticket-details-footer-item">
              <div className="ticket-details-footer-label">Assignee:</div>
              <div className="ticket-details-footer-value">
                {props.assignedTo}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ticket;
