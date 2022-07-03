const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    requried: true,
  },
  image: {
    type: String,
  },
  author: {
    type: String,
    required: true,
  },
  dateOfPublication: {
    type: String,
  },
  chapters: [{ type: String }],
  price: {
    type: Number,
    required: true,
  },
});
const book = mongoose.model("book", bookSchema);

module.exports = { book };
