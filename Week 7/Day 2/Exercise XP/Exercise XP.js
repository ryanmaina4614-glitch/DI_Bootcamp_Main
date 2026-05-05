/*
========================================================
🌟 EXERCISE 1: BLOG RESTFUL API WITH POSTGRESQL
========================================================

📁 PROJECT STRUCTURE
blog-api/
│
├── package.json
├── server.js
└── server/
    ├── config/
    │   └── db.js
    │
    ├── controllers/
    │   └── postController.js
    │
    ├── models/
    │   └── postModel.js
    │
    └── routes/
        └── postRoutes.js

========================================================
STEP 1: CREATE PROJECT
========================================================

mkdir blog-api
cd blog-api

========================================================
STEP 2: INITIALIZE NODE PROJECT
========================================================

npm init -y

========================================================
STEP 3: INSTALL DEPENDENCIES
========================================================

npm install express pg

========================================================
STEP 4: CREATE POSTGRES DATABASE & TABLE
========================================================

CREATE DATABASE blog_api;

--------------------------------------------------------
CREATE TABLE
--------------------------------------------------------

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL
);

========================================================
FILE: server/config/db.js
========================================================
*/

const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "blog_api",
  password: "your_password",
  port: 5432,
});

module.exports = pool;

/*
========================================================
FILE: server/models/postModel.js
========================================================
*/

const db = require("../config/db");

// GET ALL POSTS
const getAllPosts = async () => {
  const result = await db.query("SELECT * FROM posts ORDER BY id ASC");
  return result.rows;
};

// GET SINGLE POST
const getPostById = async (id) => {
  const result = await db.query(
    "SELECT * FROM posts WHERE id = $1",
    [id]
  );

  return result.rows[0];
};

// CREATE POST
const createPost = async (title, content) => {
  const result = await db.query(
    "INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *",
    [title, content]
  );

  return result.rows[0];
};

// UPDATE POST
const updatePost = async (id, title, content) => {
  const result = await db.query(
    "UPDATE posts SET title = $1, content = $2 WHERE id = $3 RETURNING *",
    [title, content, id]
  );

  return result.rows[0];
};

// DELETE POST
const deletePost = async (id) => {
  const result = await db.query(
    "DELETE FROM posts WHERE id = $1 RETURNING *",
    [id]
  );

  return result.rows[0];
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};

/*
========================================================
FILE: server/controllers/postController.js
========================================================
*/

const Post = require("../models/postModel");

// GET ALL POSTS
const getPosts = async (req, res) => {
  try {
    const posts = await Post.getAllPosts();

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET SINGLE POST
const getPost = async (req, res) => {
  try {
    const post = await Post.getPostById(req.params.id);

    if (!post) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// CREATE POST
const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;

    const newPost = await Post.createPost(title, content);

    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// UPDATE POST
const updatePost = async (req, res) => {
  try {
    const { title, content } = req.body;

    const updatedPost = await Post.updatePost(
      req.params.id,
      title,
      content
    );

    if (!updatedPost) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// DELETE POST
const deletePost = async (req, res) => {
  try {
    const deletedPost = await Post.deletePost(req.params.id);

    if (!deletedPost) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    res.status(200).json({
      message: "Post deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
};

/*
========================================================
FILE: server/routes/postRoutes.js
========================================================
*/

const express = require("express");
const router = express.Router();

const {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/postController");

// ROUTES
router.get("/", getPosts);

router.get("/:id", getPost);

router.post("/", createPost);

router.put("/:id", updatePost);

router.delete("/:id", deletePost);

module.exports = router;

/*
========================================================
FILE: server.js
========================================================
*/

const express = require("express");

const app = express();

const postRoutes = require("./server/routes/postRoutes");

// MIDDLEWARE
app.use(express.json());

// ROUTES
app.use("/posts", postRoutes);

// INVALID ROUTE HANDLER
app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

// SERVER ERROR HANDLER
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "Server error",
    error: err.message,
  });
});

// SERVER
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Blog API server running on port ${PORT}`);
});

/*
========================================================
TEST ROUTES
========================================================

GET    http://localhost:3000/posts
GET    http://localhost:3000/posts/1
POST   http://localhost:3000/posts
PUT    http://localhost:3000/posts/1
DELETE http://localhost:3000/posts/1

--------------------------------------------------------
POST/PUT JSON BODY
--------------------------------------------------------

{
  "title": "My First Blog",
  "content": "This is the blog content"
}

========================================================
🌟 EXERCISE 2: BOOK CRUD API WITH POSTGRESQL
========================================================

📁 PROJECT STRUCTURE
book-api/
│
├── app.js
└── server/
    ├── config/
    │   └── db.js
    │
    ├── controllers/
    │   └── bookController.js
    │
    ├── models/
    │   └── bookModel.js
    │
    └── routes/
        └── bookRoutes.js

========================================================
STEP 1: CREATE PROJECT
========================================================

mkdir book-api
cd book-api

========================================================
STEP 2: INITIALIZE PROJECT
========================================================

npm init -y

========================================================
STEP 3: INSTALL DEPENDENCIES
========================================================

npm install express pg

========================================================
STEP 4: CREATE DATABASE TABLE
========================================================

CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    publishedYear INT
);

========================================================
FILE: server/config/db.js
========================================================
*/

const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "book_api",
  password: "your_password",
  port: 5432,
});

module.exports = pool;

/*
========================================================
FILE: server/models/bookModel.js
========================================================
*/

const db = require("../config/db");

// GET ALL BOOKS
const getAllBooks = async () => {
  const result = await db.query("SELECT * FROM books");

  return result.rows;
};

// GET BOOK BY ID
const getBookById = async (id) => {
  const result = await db.query(
    "SELECT * FROM books WHERE id = $1",
    [id]
  );

  return result.rows[0];
};

// CREATE BOOK
const createBook = async (
  title,
  author,
  publishedYear
) => {
  const result = await db.query(
    "INSERT INTO books (title, author, publishedYear) VALUES ($1, $2, $3) RETURNING *",
    [title, author, publishedYear]
  );

  return result.rows[0];
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
};

/*
========================================================
FILE: server/controllers/bookController.js
========================================================
*/

const Book = require("../models/bookModel");

// GET ALL BOOKS
const getBooks = async (req, res) => {
  try {
    const books = await Book.getAllBooks();

    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET BOOK BY ID
const getBook = async (req, res) => {
  try {
    const book = await Book.getBookById(req.params.bookId);

    if (!book) {
      return res.status(404).json({
        message: "Book not found",
      });
    }

    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// CREATE BOOK
const createBook = async (req, res) => {
  try {
    const { title, author, publishedYear } = req.body;

    const newBook = await Book.createBook(
      title,
      author,
      publishedYear
    );

    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getBooks,
  getBook,
  createBook,
};

/*
========================================================
FILE: server/routes/bookRoutes.js
========================================================
*/

const express = require("express");

const router = express.Router();

const {
  getBooks,
  getBook,
  createBook,
} = require("../controllers/bookController");

// ROUTES
router.get("/", getBooks);

router.get("/:bookId", getBook);

router.post("/", createBook);

module.exports = router;

/*
========================================================
FILE: app.js
========================================================
*/

const express = require("express");

const app = express();

const bookRoutes = require("./server/routes/bookRoutes");

// MIDDLEWARE
app.use(express.json());

// ROUTES
app.use("/api/books", bookRoutes);

// INVALID ROUTES
app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

// PORT
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Book API server running on port ${PORT}`);
});

/*
========================================================
TEST ROUTES
========================================================

GET  http://localhost:5000/api/books

GET  http://localhost:5000/api/books/1

POST http://localhost:5000/api/books

--------------------------------------------------------
POST JSON BODY
--------------------------------------------------------

{
  "title": "JavaScript Essentials",
  "author": "Ryan Maina",
  "publishedYear": 2026
}

========================================================
✅ END OF ASSIGNMENT
========================================================
*/