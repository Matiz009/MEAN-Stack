const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  year: Number,
  description: String,
});

module.exports = mongoose.model("Book", bookSchema);
