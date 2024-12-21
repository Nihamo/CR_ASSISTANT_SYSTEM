const mongoose = require('mongoose');

// Define the schema for notifications
const notificationSchema = new mongoose.Schema({
  notification_id: {
    type: String,
    required: true,
    unique: true
  },
  message: {
    type: String,
    required: true
  },
  created_by: {
    type: String,
    required: true
  },
  created_on: {
    type: Date,
    default: Date.now
  },
  recipients: {
    type: [String], // Array of user USNs
    required: true
  },
  status: {
    type: String,
    enum: ['read', 'unread'],
    default: 'unread'
  }
});

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;