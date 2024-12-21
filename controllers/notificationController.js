const Notification = require('../models/Notification');

exports.createNotification = async (req, res) => {
  try {
    const { notification_id, message, created_by, recipients } = req.body;

    const newNotification = new Notification({
      notification_id,
      message,
      created_by,
      recipients,
      status: 'unread',
    });

    const savedNotification = await newNotification.save();

    // Log saved notification data
    console.log('Saved Notification:', savedNotification);

    res.status(201).json({
      success: true,
      message: 'Notification created successfully.',
      data: savedNotification,
    });
  } catch (error) {
    console.error('Error saving notification:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};


// Controller to get all notifications
exports.getAllNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find();
    res.status(200).json({
      success: true,
      data: notifications,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Controller to get notifications for a specific user
exports.getNotificationsForUser = async (req, res) => {
  try {
    const { usn } = req.params;
    const notifications = await Notification.find({ recipients: usn });
    res.status(200).json({
      success: true,
      data: notifications,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};