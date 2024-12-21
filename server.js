const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const Feedback = require('./models/Feedback'); // Adjust the path as needed

const feedbackRoutes = require("./routes/feedback");
const messageRoutes = require('./routes/message');
const notificationRoutes = require('./routes/notification');
dotenv.config();

const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use('/api/messages', messageRoutes); // Add message routes
app.use('/api/notifications', notificationRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('API is running...');
});
app.get('/test-feedback', async (req, res) => {
  try {
    const testFeedback = new Feedback({
      usn: "12345",
      course_id: "CS101",
      feedback: "Test feedback",
      rating: 5,
    });

    await testFeedback.save();
    res.status(201).json({
      success: true,
      message: "Test feedback submitted.",
      data: testFeedback,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Server running on port ${PORT}');
});