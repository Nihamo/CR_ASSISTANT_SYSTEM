import React from "react";

function NotificationCard({ notification }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{notification.title}</h5>
        <p className="card-text">{notification.message}</p>
        <small className="text-muted">{notification.date}</small>
      </div>
    </div>
  );
}

export default NotificationCard;
