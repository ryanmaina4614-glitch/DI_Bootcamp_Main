/*
========================================================
🌟 EXERCISE 1: SIMPLE EXPRESS.JS APPLICATION WITH ROUTES
========================================================

📁 Project Structure
project-folder/
│
├── app.js
├── package.json
└── routes/
    └── index.js

--------------------------------------------------------
STEP 1: INITIALIZE PROJECT
--------------------------------------------------------

mkdir express-routing-app
cd express-routing-app
npm init -y

--------------------------------------------------------
STEP 2: INSTALL EXPRESS
--------------------------------------------------------

npm install express

--------------------------------------------------------
STEP 3 & 4: CREATE ROUTER MODULE
--------------------------------------------------------
*/

// routes/index.js

const express = require("express");
const router = express.Router();

// Homepage Route
router.get("/", (req, res) => {
  res.send("Welcome to the Homepage!");
});

// About Route
router.get("/about", (req, res) => {
  res.send("Welcome to the About Us page!");
});

module.exports = router;

/*
--------------------------------------------------------
STEP 5: MOUNT ROUTER IN APP
--------------------------------------------------------
*/

// app.js

const express = require("express");
const app = express();

const indexRouter = require("./routes/index");

// Mount Router
app.use("/", indexRouter);

// Start Server
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

/*
--------------------------------------------------------
STEP 6: START SERVER
--------------------------------------------------------

node app.js

--------------------------------------------------------
STEP 7: TEST ROUTES
--------------------------------------------------------

GET http://localhost:3000/
GET http://localhost:3000/about


========================================================
🌟 EXERCISE 2: TO-DO LIST API USING EXPRESS.ROUTER
========================================================

📁 Project Structure
todo-api/
│
├── app.js
├── package.json
└── routes/
    └── todos.js

--------------------------------------------------------
STEP 1: INITIALIZE PROJECT
--------------------------------------------------------

mkdir todo-api
cd todo-api
npm init -y

--------------------------------------------------------
STEP 2: INSTALL EXPRESS
--------------------------------------------------------

npm install express

--------------------------------------------------------
STEP 3 & 4: CREATE TODO ROUTER
--------------------------------------------------------
*/

// routes/todos.js

const express = require("express");
const router = express.Router();

// Middleware for parsing JSON
router.use(express.json());

// In-memory database
const todos = [];

// GET ALL TODOS
router.get("/", (req, res) => {
  res.json(todos);
});

// CREATE NEW TODO
router.post("/", (req, res) => {
  const newTodo = {
    id: todos.length + 1,
    task: req.body.task,
  };

  todos.push(newTodo);

  res.status(201).json({
    message: "Todo added successfully",
    todo: newTodo,
  });
});

// UPDATE TODO
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const todo = todos.find((t) => t.id === id);

  if (!todo) {
    return res.status(404).json({
      message: "Todo not found",
    });
  }

  todo.task = req.body.task;

  res.json({
    message: "Todo updated successfully",
    todo,
  });
});

// DELETE TODO
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = todos.findIndex((t) => t.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Todo not found",
    });
  }

  const deletedTodo = todos.splice(index, 1);

  res.json({
    message: "Todo deleted successfully",
    deletedTodo,
  });
});

module.exports = router;

/*
--------------------------------------------------------
STEP 5: MOUNT ROUTER
--------------------------------------------------------
*/

// app.js

const express = require("express");
const app = express();

const todoRouter = require("./routes/todos");

// Middleware
app.use(express.json());

// Mount Router
app.use("/todos", todoRouter);

// Server
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Todo API running on http://localhost:${PORT}`);
});

/*
--------------------------------------------------------
STEP 6: START SERVER
--------------------------------------------------------

node app.js

--------------------------------------------------------
STEP 7: TEST API
--------------------------------------------------------

GET    http://localhost:3000/todos
POST   http://localhost:3000/todos
PUT    http://localhost:3000/todos/:id
DELETE http://localhost:3000/todos/:id

--------------------------------------------------------
POST/PUT JSON BODY EXAMPLE
--------------------------------------------------------

{
  "task": "Complete Express assignment"
}


========================================================
🌟 EXERCISE 3: BOOK MANAGEMENT API USING EXPRESS.ROUTER
========================================================

📁 Project Structure
book-api/
│
├── app.js
├── package.json
└── routes/
    └── books.js

--------------------------------------------------------
STEP 1: INITIALIZE PROJECT
--------------------------------------------------------

mkdir book-api
cd book-api
npm init -y

--------------------------------------------------------
STEP 2: INSTALL EXPRESS
--------------------------------------------------------

npm install express

--------------------------------------------------------
STEP 3 & 4: CREATE BOOK ROUTER
--------------------------------------------------------
*/

// routes/books.js

const express = require("express");
const router = express.Router();

// Middleware
router.use(express.json());

// In-memory database
const books = [];

// GET ALL BOOKS
router.get("/", (req, res) => {
  res.json(books);
});

// ADD NEW BOOK
router.post("/", (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
  };

  books.push(newBook);

  res.status(201).json({
    message: "Book added successfully",
    book: newBook,
  });
});

// UPDATE BOOK
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const book = books.find((b) => b.id === id);

  if (!book) {
    return res.status(404).json({
      message: "Book not found",
    });
  }

  book.title = req.body.title;
  book.author = req.body.author;

  res.json({
    message: "Book updated successfully",
    book,
  });
});

// DELETE BOOK
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = books.findIndex((b) => b.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Book not found",
    });
  }

  const deletedBook = books.splice(index, 1);

  res.json({
    message: "Book deleted successfully",
    deletedBook,
  });
});

module.exports = router;

/*
--------------------------------------------------------
STEP 5: MOUNT ROUTER
--------------------------------------------------------
*/

// app.js

const express = require("express");
const app = express();

const booksRouter = require("./routes/books");

// Middleware
app.use(express.json());

// Mount Router
app.use("/books", booksRouter);

// Server
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Book API running on http://localhost:${PORT}`);
});

/*
--------------------------------------------------------
STEP 6: START SERVER
--------------------------------------------------------

node app.js

--------------------------------------------------------
STEP 7: TEST API
--------------------------------------------------------

GET    http://localhost:3000/books
POST   http://localhost:3000/books
PUT    http://localhost:3000/books/:id
DELETE http://localhost:3000/books/:id

--------------------------------------------------------
POST/PUT JSON BODY EXAMPLE
--------------------------------------------------------

{
  "title": "Node.js Basics",
  "author": "Ryan Maina"
}

========================================================
✅ END OF ASSIGNMENT
========================================================
*/