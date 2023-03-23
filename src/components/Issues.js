import Ticket from "./Ticket";
import { useState } from "react";
import "animate.css";

import "./Issues.css";

const Issues = () => {
  const [ticketData, setTicketData] = useState([
    {
      id: 1,
      title: "Server Error",
      description: "Website is showing a 500 error",
      priority: "High",
      status: "Open",
      createdAt: "2022-02-22T18:56:12.123Z",
      updatedAt: "2022-02-22T18:56:12.123Z",
      assignedTo: "John Doe",
      comments: [
        {
          id: 1,
          author: "Jane Smith",
          content:
            "I am also experiencing this error. Please fix as soon as possible.",
          createdAt: "2022-02-22T19:01:43.123Z",
        },
        {
          id: 2,
          author: "John Doe",
          content:
            "Thank you for reporting this. Our team is currently investigating the issue.",
          createdAt: "2022-02-22T19:04:57.123Z",
        },
      ],
    },
    {
      id: 2,
      title: "Broken Link",
      description: "Link to contact page is broken",
      priority: "Medium",
      status: "Open",
      createdAt: "2022-02-23T10:22:56.123Z",
      updatedAt: "2022-02-23T10:22:56.123Z",
      assignedTo: "Sarah Johnson",
      comments: [
        {
          id: 1,
          author: "John Smith",
          content:
            "I tried to contact you through the website but the link is broken. Please fix.",
          createdAt: "2022-02-23T11:01:33.123Z",
        },
      ],
    },
    {
      id: 3,
      title: "Spelling Error",
      description: 'The word "relevent" is misspelled on the home page',
      priority: "Low",
      status: "Open",
      createdAt: "2022-02-24T14:02:12.123Z",
      updatedAt: "2022-02-24T14:02:12.123Z",
      assignedTo: "Michael Brown",
      comments: [],
    },
    {
      id: 1,
      title: "Server Error",
      description: "Website is showing a 500 error",
      priority: "High",
      status: "Open",
      createdAt: "2022-02-22T18:56:12.123Z",
      updatedAt: "2022-02-22T18:56:12.123Z",
      assignedTo: "John Doe",
      comments: [
        {
          id: 1,
          author: "Jane Smith",
          content:
            "I am also experiencing this error. Please fix as soon as possible.",
          createdAt: "2022-02-22T19:01:43.123Z",
        },
        {
          id: 2,
          author: "John Doe",
          content:
            "Thank you for reporting this. Our team is currently investigating the issue.",
          createdAt: "2022-02-22T19:04:57.123Z",
        },
      ],
    },
    {
      id: 2,
      title: "Broken Link",
      description: "Link to contact page is broken",
      priority: "Medium",
      status: "Open",
      createdAt: "2022-02-23T10:22:56.123Z",
      updatedAt: "2022-02-23T10:22:56.123Z",
      assignedTo: "Sarah Johnson",
      comments: [
        {
          id: 1,
          author: "John Smith",
          content:
            "I tried to contact you through the website but the link is broken. Please fix.",
          createdAt: "2022-02-23T11:01:33.123Z",
        },
      ],
    },
    {
      id: 3,
      title: "Spelling Error",
      description: 'The word "relevent" is misspelled on the home page',
      priority: "Low",
      status: "Open",
      createdAt: "2022-02-24T14:02:12.123Z",
      updatedAt: "2022-02-24T14:02:12.123Z",
      assignedTo: "Michael Brown",
      comments: [],
    },
    {
      id: 1,
      title: "Server Error",
      description: "Website is showing a 500 error",
      priority: "High",
      status: "Open",
      createdAt: "2022-02-22T18:56:12.123Z",
      updatedAt: "2022-02-22T18:56:12.123Z",
      assignedTo: "John Doe",
      comments: [
        {
          id: 1,
          author: "Jane Smith",
          content:
            "I am also experiencing this error. Please fix as soon as possible.",
          createdAt: "2022-02-22T19:01:43.123Z",
        },
        {
          id: 2,
          author: "John Doe",
          content:
            "Thank you for reporting this. Our team is currently investigating the issue.",
          createdAt: "2022-02-22T19:04:57.123Z",
        },
      ],
    },
    {
      id: 2,
      title: "Broken Link",
      description: "Link to contact page is broken",
      priority: "Medium",
      status: "Open",
      createdAt: "2022-02-23T10:22:56.123Z",
      updatedAt: "2022-02-23T10:22:56.123Z",
      assignedTo: "Sarah Johnson",
      comments: [
        {
          id: 1,
          author: "John Smith",
          content:
            "I tried to contact you through the website but the link is broken. Please fix.",
          createdAt: "2022-02-23T11:01:33.123Z",
        },
      ],
    },
    {
      id: 3,
      title: "Spelling Error",
      description: 'The word "relevent" is misspelled on the home page',
      priority: "Low",
      status: "Open",
      createdAt: "2022-02-24T14:02:12.123Z",
      updatedAt: "2022-02-24T14:02:12.123Z",
      assignedTo: "Michael Brown",
      comments: [],
    },
  ]);

  return (
    <div class="issues-container">
      <div class="filter-sort-search animate__animated animate__bounceInDown">
        <div class="filter">
          <label for="filter">Filter:</label>
          <select id="filter">
            <option value="">All</option>
            <option value="bug">Bug</option>
            <option value="feature">Feature</option>
            <option value="improvement">Improvement</option>
          </select>
        </div>
        <div class="sort">
          <label for="sort">Sort by:</label>
          <select id="sort">
            <option value="created">Created date</option>
            <option value="updated">Last updated</option>
            <option value="priority">Priority</option>
          </select>
        </div>
        <div class="search">
          <label for="search">Search:</label>
          <input type="text" id="search" placeholder="Search issues..." />
        </div>
      </div>
      <div className="issues-list animate__animated animate__slideInRight">
        {ticketData.map((ticket) => (
          <Ticket
            key={ticket.id}
            id={ticket.id}
            title={ticket.title}
            description={ticket.description}
            priority={ticket.priority}
            status={ticket.status}
            createdAt={ticket.createdAt}
            updatedAt={ticket.updatedAt}
            assignedTo={ticket.assignedTo}
            comments={ticket.comments}
            setTicketData={setTicketData}
          />
        ))}
      </div>
    </div>
  );
};

export default Issues;
