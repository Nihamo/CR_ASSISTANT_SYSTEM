import React, { useState } from "react";
import axios from "axios";

function App() {
  const [messageData, setMessageData] = useState({
    from_usn: "",
    to_usn: "",
    message: "",
  });
  const [feedbackData, setFeedbackData] = useState({
    usn: "",
    course_id: "",
    feedback: "",
    rating: "",
  });
  const [notificationData, setNotificationData] = useState({
    recipient: "",
    title: "",
    body: "",
  });

  const handleInputChange = (e, stateUpdater) => {
    const { name, value } = e.target;
    stateUpdater((prev) => ({ ...prev, [name]: value }));
  };

  const submitMessage = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/messages", messageData);
      alert(`Message sent: ${res.data.message}`);
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    }
  };

  const submitFeedback = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/feedback", feedbackData);
      alert(`Feedback submitted: ${res.data.message}`);
    } catch (error) {
      console.error(error);
      alert("Failed to submit feedback.");
    }
  };

  const sendNotification = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/notifications", notificationData);
      alert(`Notification sent: ${res.data.message}`);
    } catch (error) {
      console.error(error);
      alert("Failed to send notification.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Simple React Frontend</h1>

      <div style={{ marginBottom: "30px" }}>
        <h2>Send a Message</h2>
        <input
          type="text"
          name="from_usn"
          placeholder="From USN"
          value={messageData.from_usn}
          onChange={(e) => handleInputChange(e, setMessageData)}
        />
        <input
          type="text"
          name="to_usn"
          placeholder="To USN"
          value={messageData.to_usn}
          onChange={(e) => handleInputChange(e, setMessageData)}
        />
        <textarea
          name="message"
          placeholder="Message"
          value={messageData.message}
          onChange={(e) => handleInputChange(e, setMessageData)}
        />
        <button onClick={submitMessage}>Send Message</button>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <h2>Submit Feedback</h2>
        <input
          type="text"
          name="usn"
          placeholder="USN"
          value={feedbackData.usn}
          onChange={(e) => handleInputChange(e, setFeedbackData)}
        />
        <input
          type="text"
          name="course_id"
          placeholder="Course ID"
          value={feedbackData.course_id}
          onChange={(e) => handleInputChange(e, setFeedbackData)}
        />
        <textarea
          name="feedback"
          placeholder="Feedback"
          value={feedbackData.feedback}
          onChange={(e) => handleInputChange(e, setFeedbackData)}
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating"
          value={feedbackData.rating}
          onChange={(e) => handleInputChange(e, setFeedbackData)}
        />
        <button onClick={submitFeedback}>Submit Feedback</button>
      </div>

      <div>
        <h2>Send a Notification</h2>
        <input
          type="text"
          name="recipient"
          placeholder="Recipient"
          value={notificationData.recipient}
          onChange={(e) => handleInputChange(e, setNotificationData)}
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={notificationData.title}
          onChange={(e) => handleInputChange(e, setNotificationData)}
        />
        <textarea
          name="body"
          placeholder="Body"
          value={notificationData.body}
          onChange={(e) => handleInputChange(e, setNotificationData)}
        />
        <button onClick={sendNotification}>Send Notification</button>
      </div>
    </div>
  );
}

export default App;
