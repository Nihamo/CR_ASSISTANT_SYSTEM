import React, { useState } from "react";
import { submitFeedback } from "../services/feedbackService"; // Assume this function is defined

function FeedbackPage() {
  const [course_id, setCourseId] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await submitFeedback({ course_id, feedback, rating });
    if (result.success) {
      alert("Feedback submitted successfully!");
    } else {
      alert("Error submitting feedback!");
    }
  };

  return (
    <div className="container">
      <h2>Submit Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Course ID</label>
          <input
            type="text"
            className="form-control"
            value={course_id}
            onChange={(e) => setCourseId(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Feedback</label>
          <textarea
            className="form-control"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Rating</label>
          <input
            type="number"
            className="form-control"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="1"
            max="5"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit Feedback
        </button>
      </form>
    </div>
  );
}

export default FeedbackPage;
