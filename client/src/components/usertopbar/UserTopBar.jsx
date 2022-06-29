import React from "react";
import { Link } from "react-router-dom";
import "./usertopbar.css";

export const UserTopBar = () => {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              About
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
};