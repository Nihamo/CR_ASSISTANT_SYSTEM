const Message = require('../models/Message');

// Send a new message
exports.sendMessage = async (req, res) => {
  try {
    const { from_usn, to_usn, message } = req.body;

    // Check if all required fields are present
    if (!from_usn || !to_usn || !message) {
      return res.status(400).json({
        success: false,
        message: "Please provide from_usn, to_usn, and message content.",
      });
    }

    // Create a new message
    const newMessage = new Message({
      from_usn,
      to_usn,
      message,
    });

    // Save to the database
    await newMessage.save();

    res.status(201).json({
      success: true,
      message: "Message sent successfully.",
      data: newMessage,
    });
  } catch (error) {
    console.error("Error sending message:", error.message);
    res.status(500).json({
      success: false,
      message: "An error occurred while sending the message.",
      error: error.message,
    });
  }
};

// Get all messages for a specific user (can be student or teacher)
exports.getMessages = async (req, res) => {
  try {
    const { usn } = req.params; // Fetch messages based on 'usn'

    if (!usn) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid USN.",
      });
    }

    // Fetch messages either sent by or received by the user
    const messages = await Message.find({
      $or: [{ from_usn: usn }, { to_usn: usn }],
    });

    res.status(200).json({
      success: true,
      data: messages,
    });
  } catch (error) {
    console.error("Error fetching messages:", error.message);
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching the messages.",
      error: error.message,
    });
  }
};