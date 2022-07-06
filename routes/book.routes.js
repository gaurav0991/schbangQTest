const express = require("express");
const book = require("../models/Book.schema.js");
const {
  getbooks,
  createBooks,
  updateBook,
  deleteBook,
} = require("../controllers/book.controller.js");

const router = express.Router();

router.route("/").get(getbooks);
router.route("/").post(createBooks);
router.route("/").put(updateBook);
router.route("/").delete(deleteBook);

module.exports = router;
