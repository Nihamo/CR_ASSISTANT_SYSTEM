const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  from_usn: { type: String, required: true }, // Student sending the message
  to_usn: { type: String, required: true },   // Teacher receiving the message
  message: { type: String, required: true },   // Message content
  date_sent: { type: Date, default: Date.now }, // Date when the message was sent
  status: { type: String, enum: ['read', 'unread'], default: 'unread' }, // Message status
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;