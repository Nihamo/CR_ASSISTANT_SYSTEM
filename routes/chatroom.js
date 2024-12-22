const express = require('express');
const router = express.Router();
const ChatRoomController = require('../controllers/chatRoomController'); // Adjust path

// Route to save a message to the database
router.post('/save', ChatRoomController.saveMessage);

// Route to get all messages for a specific room
router.get('/:room', ChatRoomController.getMessagesByRoom);

module.exports = router;
