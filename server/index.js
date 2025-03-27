const express = require("express");
const mongoose = require("mongoose");
const Book = require("./model/book");

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/BookStore", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Add a new route to create a book
app.post("/create-book", async (req, res) => {
  try {
    const { title, author, year, description } = req.body;

    console.log("Received book data:", { title, author, year, description });

    const book = new Book({ title, author, year, description });
    await book.save();

    res.json({
      message: "Book created successfully!",
      book,
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating book", error });
  }
});

// Add a new route to get all books
app.get("/books", async (req, res) => {
  let books = await Book.find();
  res.send(books);
});

// Add a new route to get a single book by its ID
app.get("/book/:id", async (req, res) => {
  let book = await Book.findById(req.params.id);
  res.send(book);
});

// Add a new route to delete a book by its ID
app.delete("/book/:id", async (req, res) => {
  let book = await Book.findByIdAndDelete(req.params.id);
  res.send(book);
});

// Add a new route to update a book by its ID
app.put("/update-book/:id", async (req, res) => {
  const { title, author, year, description } = req.body;
  let book = await Book.findByIdAndUpdate(req.params.id, {
    title,
    author,
    year,
    description,
  });
  await book.save();
  res.send(book);
});
app.listen(3000, () => console.log("Server running on port 3000"));
