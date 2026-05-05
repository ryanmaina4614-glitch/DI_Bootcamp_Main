/*
========================================================
🌟 USER MANAGEMENT API
USING EXPRESS.JS + BCRYPT + POSTGRESQL
========================================================

📁 PROJECT STRUCTURE
user-management-api/
│
├── package.json
├── server.js
│
└── server/
    ├── config/
    │   └── db.js
    │
    ├── controllers/
    │   └── userController.js
    │
    ├── models/
    │   └── userModel.js
    │
    └── routes/
        └── userRoutes.js

========================================================
STEP 1: CREATE PROJECT
========================================================

mkdir user-management-api
cd user-management-api

========================================================
STEP 2: INITIALIZE NODE PROJECT
========================================================

npm init -y

========================================================
STEP 3: INSTALL DEPENDENCIES
========================================================

npm install express pg bcrypt

========================================================
STEP 4: CREATE DATABASE
========================================================

CREATE DATABASE user_management_api;

========================================================
STEP 5: CREATE TABLES
========================================================

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(100) UNIQUE NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100)
);

--------------------------------------------------------

CREATE TABLE hashpwd (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

========================================================
FILE: server/config/db.js
========================================================
*/

const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "user_management_api",
  password: "your_password",
  port: 5432,
});

module.exports = pool;

/*
========================================================
FILE: server/models/userModel.js
========================================================
*/

const db = require("../config/db");

/*
========================================================
REGISTER USER WITH TRANSACTION
========================================================
*/

const createUser = async (
  email,
  username,
  first_name,
  last_name,
  hashedPassword
) => {
  const client = await db.connect();

  try {
    await client.query("BEGIN");

    // INSERT INTO USERS TABLE
    const userResult = await client.query(
      `
      INSERT INTO users
      (email, username, first_name, last_name)
      VALUES ($1, $2, $3, $4)
      RETURNING *
      `,
      [email, username, first_name, last_name]
    );

    // INSERT INTO HASHPWD TABLE
    await client.query(
      `
      INSERT INTO hashpwd
      (username, password)
      VALUES ($1, $2)
      `,
      [username, hashedPassword]
    );

    await client.query("COMMIT");

    return userResult.rows[0];
  } catch (error) {
    await client.query("ROLLBACK");

    throw error;
  } finally {
    client.release();
  }
};

/*
========================================================
LOGIN USER
========================================================
*/

const getUserPassword = async (username) => {
  const result = await db.query(
    `
    SELECT users.*, hashpwd.password
    FROM users
    JOIN hashpwd
    ON users.username = hashpwd.username
    WHERE users.username = $1
    `,
    [username]
  );

  return result.rows[0];
};

/*
========================================================
GET ALL USERS
========================================================
*/

const getAllUsers = async () => {
  const result = await db.query(
    "SELECT * FROM users ORDER BY id ASC"
  );

  return result.rows;
};

/*
========================================================
GET USER BY ID
========================================================
*/

const getUserById = async (id) => {
  const result = await db.query(
    "SELECT * FROM users WHERE id = $1",
    [id]
  );

  return result.rows[0];
};

/*
========================================================
UPDATE USER
========================================================
*/

const updateUser = async (
  id,
  email,
  username,
  first_name,
  last_name
) => {
  const result = await db.query(
    `
    UPDATE users
    SET email = $1,
        username = $2,
        first_name = $3,
        last_name = $4
    WHERE id = $5
    RETURNING *
    `,
    [email, username, first_name, last_name, id]
  );

  return result.rows[0];
};

module.exports = {
  createUser,
  getUserPassword,
  getAllUsers,
  getUserById,
  updateUser,
};

/*
========================================================
FILE: server/controllers/userController.js
========================================================
*/

const bcrypt = require("bcrypt");

const User = require("../models/userModel");

/*
========================================================
REGISTER CONTROLLER
========================================================
*/

const registerUser = async (req, res) => {
  try {
    const {
      email,
      username,
      first_name,
      last_name,
      password,
    } = req.body;

    // HASH PASSWORD
    const hashedPassword = await bcrypt.hash(password, 10);

    // CREATE USER
    const user = await User.createUser(
      email,
      username,
      first_name,
      last_name,
      hashedPassword
    );

    res.status(201).json({
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

/*
========================================================
LOGIN CONTROLLER
========================================================
*/

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // GET USER
    const user = await User.getUserPassword(username);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // COMPARE PASSWORDS
    const validPassword = await bcrypt.compare(
      password,
      user.password
    );

    if (!validPassword) {
      return res.status(401).json({
        message: "Invalid password",
      });
    }

    res.status(200).json({
      message: "Login successful",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

/*
========================================================
GET ALL USERS CONTROLLER
========================================================
*/

const getUsers = async (req, res) => {
  try {
    const users = await User.getAllUsers();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

/*
========================================================
GET USER BY ID CONTROLLER
========================================================
*/

const getUser = async (req, res) => {
  try {
    const user = await User.getUserById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

/*
========================================================
UPDATE USER CONTROLLER
========================================================
*/

const updateUser = async (req, res) => {
  try {
    const {
      email,
      username,
      first_name,
      last_name,
    } = req.body;

    const updatedUser = await User.updateUser(
      req.params.id,
      email,
      username,
      first_name,
      last_name
    );

    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getUsers,
  getUser,
  updateUser,
};

/*
========================================================
FILE: server/routes/userRoutes.js
========================================================
*/

const express = require("express");

const router = express.Router();

const {
  registerUser,
  loginUser,
  getUsers,
  getUser,
  updateUser,
} = require("../controllers/userController");

/*
========================================================
ROUTES
========================================================
*/

// REGISTER
router.post("/register", registerUser);

// LOGIN
router.post("/login", loginUser);

// GET ALL USERS
router.get("/users", getUsers);

// GET USER BY ID
router.get("/users/:id", getUser);

// UPDATE USER
router.put("/users/:id", updateUser);

module.exports = router;

/*
========================================================
FILE: server.js
========================================================
*/

const express = require("express");

const app = express();

// MIDDLEWARE
app.use(express.json());

// ROUTES
const userRoutes = require("./server/routes/userRoutes");

app.use("/", userRoutes);

/*
========================================================
INVALID ROUTES
========================================================
*/

app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

/*
========================================================
ERROR HANDLER
========================================================
*/

app.use((err, req, res, next) => {
  res.status(500).json({
    message: "Server error",
    error: err.message,
  });
});

/*
========================================================
START SERVER
========================================================
*/

const PORT = 3000;

app.listen(PORT, () => {
  console.log(
    `User Management API running on port ${PORT}`
  );
});

/*
========================================================
TEST API WITH POSTMAN OR CURL
========================================================

--------------------------------------------------------
1️⃣ REGISTER USER
--------------------------------------------------------

POST http://localhost:3000/register

JSON BODY:
{
  "email": "ryan@example.com",
  "username": "ryanmaina",
  "first_name": "Ryan",
  "last_name": "Maina",
  "password": "mypassword123"
}

--------------------------------------------------------
2️⃣ LOGIN USER
--------------------------------------------------------

POST http://localhost:3000/login

JSON BODY:
{
  "username": "ryanmaina",
  "password": "mypassword123"
}

--------------------------------------------------------
3️⃣ GET ALL USERS
--------------------------------------------------------

GET http://localhost:3000/users

--------------------------------------------------------
4️⃣ GET USER BY ID
--------------------------------------------------------

GET http://localhost:3000/users/1

--------------------------------------------------------
5️⃣ UPDATE USER
--------------------------------------------------------

PUT http://localhost:3000/users/1

JSON BODY:
{
  "email": "newemail@example.com",
  "username": "newusername",
  "first_name": "Ryan",
  "last_name": "Maina Updated"
}

========================================================
 FEATURES IMPLEMENTED
========================================================

✔ Express.js API
✔ PostgreSQL Database Connection
✔ Bcrypt Password Hashing
✔ User Registration
✔ User Login
✔ Read All Users
✔ Read User By ID
✔ Update User
✔ Transactions
✔ MVC Folder Structure
✔ Error Handling

========================================================
 END OF ASSIGNMENT
========================================================
*/