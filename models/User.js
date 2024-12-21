const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  usn: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  role: { type: String, required: true },
  email: { type: String, required: true },
  contact: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);