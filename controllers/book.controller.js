const { book } = require("../models/Book.schema.js");

const getbooks = async function (req, res) {
  try {
    let allBooks;
    if (req.query.id) allBooks = await book.findById(req.query.id);
    else allBooks = await book.find({});
    res.json(allBooks);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const createBooks = async function (req, res) {
  try {
    const newbook = await book.create(req.body);
    return res.json(newbook);
  } catch (error) {
    res.send(error);
  }
};

const updateBook = async function (req, res) {
  try {
    const updatedBook = await book.findByIdAndUpdate(req.query.id, req.body, {
      new: true,
    });
    res.json(updatedBook);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

module.exports = { getbooks, createBooks, updateBook };
