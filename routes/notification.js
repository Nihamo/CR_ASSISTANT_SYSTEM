const express = require('express');
const notificationController = require('../controllers/notificationController');
const router = express.Router();

// Route to create a new notification
router.post('/', notificationController.createNotification);

// Route to get all notifications
router.get('/', notificationController.getAllNotifications);

// Route to get notifications for a specific user
router.get('/user/:usn', notificationController.getNotificationsForUser);

module.exports = router;