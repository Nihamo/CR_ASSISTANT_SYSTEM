import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="container">
      <h2>Welcome to the Dashboard!</h2>
      <div>
        <Link to="/messages" className="btn btn-info m-2">
          View Messages
        </Link>
        <Link to="/notifications" className="btn btn-info m-2">
          View Notifications
        </Link>
        <Link to="/feedback" className="btn btn-info m-2">
          Give Feedback
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
