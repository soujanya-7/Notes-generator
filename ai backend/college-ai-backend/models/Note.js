const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  userId: String,
  input: String,
  output: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Note", noteSchema);
