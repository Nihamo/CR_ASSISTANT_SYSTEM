import React, { useState, useEffect } from "react";
import MessageCard from "../components/MessageCard";
import { getMessages } from "../services/messageService"; // Assume this function is defined

function MessagesPage() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function fetchMessages() {
      const data = await getMessages(); // Fetch messages from API
      setMessages(data);
    }
    fetchMessages();
  }, []);

  return (
    <div className="container">
      <h2>Messages</h2>
      {messages.map((message) => (
        <MessageCard key={message._id} message={message} />
      ))}
    </div>
  );
}

export default MessagesPage;
