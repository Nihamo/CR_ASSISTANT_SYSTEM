const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

// Route to send a message
router.post('/send', messageController.sendMessage);

// Route to get all messages for a specific user
router.get('/:usn', messageController.getMessages);

module.exports = router;