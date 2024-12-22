/*import React from "react";

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

export default FeedbackCard;*/
import React, { useState, useEffect } from "react";
import { submitFeedback } from "../services/feedbackService"; // Assume this function is defined

function FeedbackCard() {
  const [course_id, setCourseId] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(1);
  const [usn, setUsn] = useState(""); // State to store the USN

  useEffect(() => {
    // Assuming the USN is stored in localStorage (this could be adapted if using context or other methods)
    const storedUsn = localStorage.getItem("usn");
    if (storedUsn) {
      setUsn(storedUsn); // Set the USN from local storage or other storage mechanism
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!usn) {
      alert("User is not logged in!");
      return;
    }

    // Send the feedback data including the usn
    const result = await submitFeedback({ course_id, feedback, rating, usn });
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

export default FeedbackCard;

