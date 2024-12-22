const mongoose = require('mongoose');

const chatMessageSchema = new mongoose.Schema({
  room: { type: String, required: true }, // Chat room name
  sender: { type: String, required: true }, // Sender username/ID
  message: { type: String, required: true }, // Message content
  timestamp: { type: Date, default: Date.now }, // Time of message
});

const ChatMessage = mongoose.model('ChatMessage', chatMessageSchema);

module.exports = ChatMessage;
