```javascript
// App.js

import React, { useState } from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

/* =========================================
   REDUX SLICE
========================================= */

const plannerSlice = createSlice({
  name: "planner",

  initialState: {
    selectedDate: new Date().toISOString().split("T")[0],
    tasksByDate: {},
  },

  reducers: {
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },

    addTask: (state, action) => {
      const { date, task } = action.payload;

      if (!state.tasksByDate[date]) {
        state.tasksByDate[date] = [];
      }

      state.tasksByDate[date].push({
        id: Date.now(),
        text: task,
      });
    },

    editTask: (state, action) => {
      const { date, id, updatedText } = action.payload;

      const task = state.tasksByDate[date]?.find(
        (task) => task.id === id
      );

      if (task) {
        task.text = updatedText;
      }
    },

    deleteTask: (state, action) => {
      const { date, id } = action.payload;

      state.tasksByDate[date] =
        state.tasksByDate[date]?.filter(
          (task) => task.id !== id
        ) || [];
    },
  },
});

const {
  setSelectedDate,
  addTask,
  editTask,
  deleteTask,
} = plannerSlice.actions;

/* =========================================
   STORE
========================================= */

const store = configureStore({
  reducer: {
    planner: plannerSlice.reducer,
  },
});

/* =========================================
   DATE PICKER COMPONENT
========================================= */

function DatePicker() {
  const dispatch = useDispatch();

  const selectedDate = useSelector(
    (state) => state.planner.selectedDate
  );

  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Select Date</h3>

      <input
        type="date"
        value={selectedDate}
        onChange={(e) =>
          dispatch(setSelectedDate(e.target.value))
        }
      />
    </div>
  );
}

/* =========================================
   ADD TASK COMPONENT
========================================= */

function AddTask() {
  const dispatch = useDispatch();

  const selectedDate = useSelector(
    (state) => state.planner.selectedDate
  );

  const [taskText, setTaskText] = useState("");

  const handleAdd = () => {
    if (!taskText.trim()) {
      alert("Task cannot be empty");
      return;
    }

    dispatch(
      addTask({
        date: selectedDate,
        task: taskText,
      })
    );

    setTaskText("");
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Enter task"
        value={taskText}
        onChange={(e) =>
          setTaskText(e.target.value)
        }
      />

      <button
        onClick={handleAdd}
        style={{ marginLeft: "10px" }}
      >
        Add Task
      </button>
    </div>
  );
}

/* =========================================
   TASK ITEM COMPONENT
========================================= */

function TaskItem({ task }) {
  const dispatch = useDispatch();

  const selectedDate = useSelector(
    (state) => state.planner.selectedDate
  );

  const [editing, setEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleSave = () => {
    if (!newText.trim()) return;

    dispatch(
      editTask({
        date: selectedDate,
        id: task.id,
        updatedText: newText,
      })
    );

    setEditing(false);
  };

  return (
    <li
      style={{
        marginBottom: "10px",
        border: "1px solid #ccc",
        padding: "10px",
      }}
    >
      {editing ? (
        <>
          <input
            value={newText}
            onChange={(e) =>
              setNewText(e.target.value)
            }
          />

          <button
            onClick={handleSave}
            style={{ marginLeft: "10px" }}
          >
            Save
          </button>
        </>
      ) : (
        <>
          <span>{task.text}</span>

          <button
            onClick={() => setEditing(true)}
            style={{ marginLeft: "10px" }}
          >
            Edit
          </button>

          <button
            onClick={() =>
              dispatch(
                deleteTask({
                  date: selectedDate,
                  id: task.id,
                })
              )
            }
            style={{ marginLeft: "10px" }}
          >
            Delete
          </button>
        </>
      )}
    </li>
  );
}

/* =========================================
   TASK LIST COMPONENT
========================================= */

function TaskList() {
  const selectedDate = useSelector(
    (state) => state.planner.selectedDate
  );

  const tasks =
    useSelector(
      (state) =>
        state.planner.tasksByDate[selectedDate]
    ) || [];

  return (
    <div>
      <h3>Tasks for {selectedDate}</h3>

      {tasks.length === 0 ? (
        <p>No tasks for this day.</p>
      ) : (
        <ul
          style={{
            listStyle: "none",
            padding: 0,
          }}
        >
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

/* =========================================
   MAIN APP
========================================= */

function PlannerApp() {
  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <h1>Daily Planner Application</h1>

      <DatePicker />

      <AddTask />

      <TaskList />
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <PlannerApp />
    </Provider>
  );
}
```

## Features Implemented

### Redux Toolkit Store

* `configureStore()`
* `createSlice()`

### Actions

* `addTask`
* `editTask`
* `deleteTask`
* `setSelectedDate`

### Components

* DatePicker
* AddTask
* TaskList
* TaskItem (Edit & Delete functionality)

### React-Redux Hooks

* `useSelector`
* `useDispatch`

### Functionality

* Select any date
* View tasks for that date
* Add tasks
* Edit tasks
* Delete tasks
* Automatic UI updates through Redux state

## Required Packages

```bash
npm install react-redux @reduxjs/toolkit
```

## Run Application

```bash
npm start
```
