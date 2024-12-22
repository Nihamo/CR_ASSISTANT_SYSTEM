import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          My App
        </Link>
        <div className="navbar-nav">
          <Link className="nav-item nav-link" to="/messages">
            Messages
          </Link>
          <Link className="nav-item nav-link" to="/notifications">
            Notifications
          </Link>
          <Link className="nav-item nav-link" to="/feedback">
            Feedback
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
