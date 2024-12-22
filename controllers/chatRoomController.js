const ChatMessage = require('../models/ChatMessage'); // Adjust path

// Save a message to the database
exports.saveMessage = async (req, res) => {
  try {
    const { room, sender, message } = req.body;

    if (!room || !sender || !message) {
      return res.status(400).json({ success: false, message: 'Missing required fields.' });
    }

    const newMessage = new ChatMessage({ room, sender, message });
    await newMessage.save();

    res.status(201).json({
      success: true,
      message: 'Message saved successfully.',
      data: newMessage,
    });
  } catch (error) {
    console.error('Error saving message:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all messages for a specific chat room
exports.getMessagesByRoom = async (req, res) => {
  try {
    const { room } = req.params;

    if (!room) {
      return res.status(400).json({ success: false, message: 'Room name is required.' });
    }

    const messages = await ChatMessage.find({ room }).sort({ timestamp: 1 }); // Sorted by timestamp
    res.status(200).json({ success: true, data: messages });
  } catch (error) {
    console.error('Error fetching messages:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};
