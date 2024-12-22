import React from "react";

function FeedbackCard({ feedback }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{feedback.course_id}</h5>
        <p className="card-text">{feedback.feedback}</p>
        <p className="text-muted">Rating: {feedback.rating}</p>
      </div>
    </div>
  );
}

export default FeedbackCard;
