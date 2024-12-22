const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const Feedback = require('./models/Feedback'); // Adjust the path as needed
const feedbackRoutes = require("./routes/feedback");
const messageRoutes = require('./routes/message');
const notificationRoutes = require('./routes/notification');
const http = require('http'); // Required for creating an HTTP server
const socketIo = require('socket.io'); // Import Socket.IO

// Import ChatRoom Routes
const chatRoomRoutes = require('./routes/chatroom'); // Adjust as needed

dotenv.config();

const app = express();

// Middleware for parsing JSON
app.use(express.json());
app.use(cors());
// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/notifications', notificationRoutes);

// Add routes for chat room
app.use('/api/chatroom', chatRoomRoutes); // Chat Room Routes

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

// Create HTTP server for Socket.IO
const server = http.createServer(app);

// Socket.IO setup
const io = socketIo(server, {
  cors: {
    origin: '*', // Allow requests from any origin (you can change this for production)
    methods: ['GET', 'POST'],
  },
});

// Socket.IO logic for chat room
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  // Listen for 'joinRoom' event to join a specific chat room
  socket.on('joinRoom', (room) => {
    socket.join(room);
    console.log(`User ${socket.id} joined room: ${room}`);
  });

  // Listen for 'chatMessage' event to receive messages
  socket.on('chatMessage', (data) => {
    console.log('Message received:', data);
    const { room, message, sender } = data;

    // Broadcast the message to others in the same room
    io.to(room).emit('message', { sender, message, timestamp: new Date() });

    // Optionally, save the message to the database (using ChatRoom model)
    // You can add a database call here if needed
  });

  // Handle user disconnection
  socket.on('disconnect', () => {
    console.log('A user disconnected:', socket.id);
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
