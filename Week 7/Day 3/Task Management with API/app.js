/*
========================================================
🌟 TASK MANAGEMENT API USING EXPRESS.JS
WITH JSON FILE STORAGE
========================================================

📁 PROJECT STRUCTURE
task-api/
│
├── package.json
├── server.js
├── tasks.json
│
└── server/
    ├── controllers/
    │   └── taskController.js
    │
    ├── routes/
    │   └── taskRoutes.js
    │
    └── utils/
        └── fileHandler.js

========================================================
STEP 1: CREATE PROJECT
========================================================

mkdir task-api
cd task-api

========================================================
STEP 2: INITIALIZE NODE PROJECT
========================================================

npm init -y

========================================================
STEP 3: INSTALL EXPRESS
========================================================

npm install express

========================================================
STEP 4: CREATE JSON FILE
========================================================

Create a file named:

tasks.json

Add the following content:

[]

========================================================
FILE: server/utils/fileHandler.js
========================================================
*/

const fs = require("fs").promises;

const path = require("path");

// FILE PATH
const filePath = path.join(__dirname, "../../tasks.json");

/*
========================================================
READ TASKS FROM FILE
========================================================
*/

const readTasks = async () => {
  try {
    const data = await fs.readFile(filePath, "utf-8");

    return JSON.parse(data);
  } catch (error) {
    throw new Error("Error reading tasks file");
  }
};

/*
========================================================
WRITE TASKS TO FILE
========================================================
*/

const writeTasks = async (tasks) => {
  try {
    await fs.writeFile(
      filePath,
      JSON.stringify(tasks, null, 2)
    );
  } catch (error) {
    throw new Error("Error writing to tasks file");
  }
};

module.exports = {
  readTasks,
  writeTasks,
};

/*
========================================================
FILE: server/controllers/taskController.js
========================================================
*/

const {
  readTasks,
  writeTasks,
} = require("../utils/fileHandler");

/*
========================================================
GET ALL TASKS
========================================================
*/

const getTasks = async (req, res) => {
  try {
    const tasks = await readTasks();

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

/*
========================================================
GET TASK BY ID
========================================================
*/

const getTask = async (req, res) => {
  try {
    const tasks = await readTasks();

    const task = tasks.find(
      (t) => t.id === parseInt(req.params.id)
    );

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

/*
========================================================
CREATE TASK
========================================================
*/

const createTask = async (req, res) => {
  try {
    const { title, completed } = req.body;

    // VALIDATION
    if (!title) {
      return res.status(400).json({
        message: "Title is required",
      });
    }

    const tasks = await readTasks();

    const newTask = {
      id: tasks.length + 1,
      title,
      completed: completed || false,
    };

    tasks.push(newTask);

    await writeTasks(tasks);

    res.status(201).json({
      message: "Task created successfully",
      task: newTask,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

/*
========================================================
UPDATE TASK
========================================================
*/

const updateTask = async (req, res) => {
  try {
    const { title, completed } = req.body;

    // VALIDATION
    if (!title) {
      return res.status(400).json({
        message: "Title is required",
      });
    }

    const tasks = await readTasks();

    const taskIndex = tasks.findIndex(
      (t) => t.id === parseInt(req.params.id)
    );

    if (taskIndex === -1) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    tasks[taskIndex] = {
      ...tasks[taskIndex],
      title,
      completed,
    };

    await writeTasks(tasks);

    res.status(200).json({
      message: "Task updated successfully",
      task: tasks[taskIndex],
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

/*
========================================================
DELETE TASK
========================================================
*/

const deleteTask = async (req, res) => {
  try {
    const tasks = await readTasks();

    const taskIndex = tasks.findIndex(
      (t) => t.id === parseInt(req.params.id)
    );

    if (taskIndex === -1) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    const deletedTask = tasks.splice(taskIndex, 1);

    await writeTasks(tasks);

    res.status(200).json({
      message: "Task deleted successfully",
      deletedTask,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};

/*
========================================================
FILE: server/routes/taskRoutes.js
========================================================
*/

const express = require("express");

const router = express.Router();

const {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

/*
========================================================
TASK ROUTES
========================================================
*/

// GET ALL TASKS
router.get("/", getTasks);

// GET TASK BY ID
router.get("/:id", getTask);

// CREATE TASK
router.post("/", createTask);

// UPDATE TASK
router.put("/:id", updateTask);

// DELETE TASK
router.delete("/:id", deleteTask);

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

// IMPORT ROUTES
const taskRoutes = require("./server/routes/taskRoutes");

// ROUTES
app.use("/tasks", taskRoutes);

/*
========================================================
INVALID ROUTE HANDLER
========================================================
*/

app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

/*
========================================================
GLOBAL ERROR HANDLER
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
  console.log(`Task API running on port ${PORT}`);
});

/*
========================================================
TEST API USING POSTMAN OR CURL
========================================================

--------------------------------------------------------
1️⃣ GET ALL TASKS
--------------------------------------------------------

GET http://localhost:3000/tasks

--------------------------------------------------------
2️⃣ GET TASK BY ID
--------------------------------------------------------

GET http://localhost:3000/tasks/1

--------------------------------------------------------
3️⃣ CREATE TASK
--------------------------------------------------------

POST http://localhost:3000/tasks

JSON BODY:
{
  "title": "Complete Express assignment",
  "completed": false
}

--------------------------------------------------------
4️⃣ UPDATE TASK
--------------------------------------------------------

PUT http://localhost:3000/tasks/1

JSON BODY:
{
  "title": "Complete Node.js assignment",
  "completed": true
}

--------------------------------------------------------
5️⃣ DELETE TASK
--------------------------------------------------------

DELETE http://localhost:3000/tasks/1

========================================================
SAMPLE tasks.json FILE
========================================================

[
  {
    "id": 1,
    "title": "Complete Express assignment",
    "completed": false
  }
]

========================================================
FEATURES IMPLEMENTED
========================================================

✔ Express.js API
✔ JSON File Storage
✔ Read All Tasks
✔ Read Task By ID
✔ Create Task
✔ Update Task
✔ Delete Task
✔ Input Validation
✔ File Read/Write Error Handling
✔ Route Validation
✔ Modular Folder Structure

========================================================
✅ END OF ASSIGNMENT
========================================================
*/