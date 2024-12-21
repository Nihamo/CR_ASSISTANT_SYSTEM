const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  usn: { type: String, required: true },
  course_id: { type: String, required: true },
  feedback: { type: String, required: true },
  rating: { type: Number, required: true },
  submitted_on: { type: Date, default: Date.now },
});

const Feedback = mongoose.model('Feedback', feedbackSchema);
module.exports = Feedback;
