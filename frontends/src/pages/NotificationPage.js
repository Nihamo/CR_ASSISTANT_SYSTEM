import React, { useState, useEffect } from "react";
import NotificationCard from "../components/NotificationCard";
import { getNotifications } from "../services/notificationService"; // Assume this function is defined

function NotificationsPage() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    async function fetchNotifications() {
      const data = await getNotifications(); // Fetch notifications from API
      setNotifications(data);
    }
    fetchNotifications();
  }, []);

  return (
    <div className="container">
      <h2>Notifications</h2>
      {notifications.map((notification) => (
        <NotificationCard
          key={notification._id}
          notification={notification}
        />
      ))}
    </div>
  );
}

export default NotificationsPage;
