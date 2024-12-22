export async function getNotifications() {
    // API call to fetch notifications
    return [
      {
        _id: "1",
        title: "System Update",
        message: "Your system is up-to-date.",
        date: "2024-12-20",
      },
      {
        _id: "2",
        title: "New Message",
        message: "You have a new message from John.",
        date: "2024-12-21",
      },
    ];
  }
  