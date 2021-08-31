import React from "react";
import { Sidenav } from "../../layouts";
import "./UserInformation.css";
import { Link } from "react-router-dom";

function UserInformation(props) {
  return (
    <div className="body__container">
      <Sidenav />
      <div className="user__information">
        <div className="user__header">
          <h2>Your account</h2>
        </div>

        <div className="user__profile">
          <Link to="/profile">Your Profile </Link>
        </div>
        <div className="user__history">
          <Link to="/book_history">Books History and Details</Link>
        </div>
        <div className="user__button">
          <Link to="/">sign out</Link>
        </div>
      </div>
    </div>
  );
}

export default UserInformation;
