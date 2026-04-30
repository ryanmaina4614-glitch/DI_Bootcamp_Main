// ===============================
// IMPORTS & SETUP
// ===============================
const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

// ===============================
// EXERCISE 1: BLOG API
// ===============================
let posts = [
  { id: 1, title: "First Post", content: "Hello World" },
  { id: 2, title: "Second Post", content: "Learning Express" }
];

// GET all posts
app.get("/posts", (req, res) => {
  res.json(posts);
});

// GET single post
app.get("/posts/:id", (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ message: "Post not found" });
  res.json(post);
});

// CREATE post
app.post("/posts", (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
    content: req.body.content
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

// UPDATE post
app.put("/posts/:id", (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ message: "Post not found" });

  post.title = req.body.title || post.title;
  post.content = req.body.content || post.content;

  res.json(post);
});

// DELETE post
app.delete("/posts/:id", (req, res) => {
  const index = posts.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Post not found" });

  const deleted = posts.splice(index, 1);
  res.json(deleted[0]);
});

// ===============================
// EXERCISE 2: BOOK API
// ===============================
let books = [
  { id: 1, title: "1984", author: "George Orwell", publishedYear: 1949 },
  { id: 2, title: "The Hobbit", author: "J.R.R. Tolkien", publishedYear: 1937 }
];

// READ ALL books
app.get("/api/books", (req, res) => {
  res.json(books);
});

// READ ONE book
app.get("/api/books/:bookId", (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.bookId));
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.json(book);
});

// CREATE book
app.post("/api/books", (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
    publishedYear: req.body.publishedYear
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

// ===============================
// EXERCISE 3: AXIOS DATA FETCH
// ===============================

// Simulating dataService module
const fetchPosts = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return response.data;
};

// Endpoint using Axios
app.get("/external/posts", async (req, res) => {
  try {
    const data = await fetchPosts();
    console.log("Data successfully retrieved and sent!");
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching external data" });
  }
});

// ===============================
// ERROR HANDLING
// ===============================

// Invalid routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Server errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Server error" });
});

// ===============================
// START SERVER
// ===============================
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
