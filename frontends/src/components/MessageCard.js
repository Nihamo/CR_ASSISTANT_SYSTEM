import React from "react";

function MessageCard({ message }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{message.from}</h5>
        <p className="card-text">{message.content}</p>
        <small className="text-muted">{message.date}</small>
      </div>
    </div>
  );
}

export default MessageCard;
