const Feedback = require("../models/Feedback");

// 
exports.addFeedback = async (req, res) => {
  try {
    console.log("Request body:", req.body);  // Log incoming data
    const { usn, course_id, feedback, rating } = req.body;

    // Create feedback
    const newFeedback = new Feedback({ usn, course_id, feedback, rating });
    await newFeedback.save();

    res.status(201).json({
      success: true,
      message: "Feedback submitted successfully.",
      data: newFeedback,
    });
  } catch (error) {
    console.error("Error:", error);  // Log errors for better debugging
    res.status(500).json({ success: false, error: error.message });
  }
};


// Get all feedback
exports.getAllFeedback = async (req, res) => {
  try {
    const feedbackList = await Feedback.find();
    res.status(200).json({ success: true, data: feedbackList });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};