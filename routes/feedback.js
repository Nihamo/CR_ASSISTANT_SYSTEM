const express = require("express");
const router = express.Router();
const { addFeedback, getAllFeedback } = require("../controllers/feedbackController");

// POST: Add new feedback
router.post("/", addFeedback);

// GET: Get all feedback
router.get("/", getAllFeedback);

module.exports = router;