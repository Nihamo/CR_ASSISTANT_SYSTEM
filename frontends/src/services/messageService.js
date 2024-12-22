export async function getMessages() {
    // API call to fetch messages
    return [
      {
        _id: "1",
        from: "John Doe",
        content: "Hello, how are you?",
        date: "2024-12-20",
      },
      {
        _id: "2",
        from: "Jane Doe",
        content: "Can we meet tomorrow?",
        date: "2024-12-21",
      },
    ];
  }
  