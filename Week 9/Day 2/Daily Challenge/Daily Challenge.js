# Exercise 2: Daily Planner Application using React and Redux

```jsx
// App.js

import React, { useState, useEffect } from "react";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";

/* ===================================
   ACTION TYPES
=================================== */

const SELECT_DAY = "SELECT_DAY";
const ADD_TASK = "ADD_TASK";
const EDIT_TASK = "EDIT_TASK";
const DELETE_TASK = "DELETE_TASK";

/* ===================================
   ACTION CREATORS
=================================== */

const selectDay = (day) => ({
  type: SELECT_DAY,
  payload: day,
});

const addTask = (day, task) => ({
  type: ADD_TASK,
  payload: { day, task },
});

const editTask = (day, taskId, updatedText) => ({
  type: EDIT_TASK,
  payload: { day, taskId, updatedText },
});

const deleteTask = (day, taskId) => ({
  type: DELETE_TASK,
  payload: { day, taskId },
});

/* ===================================
   LOAD DATA FROM LOCAL STORAGE
=================================== */

const savedState = localStorage.getItem("plannerState");

const initialState = savedState
  ? JSON.parse(savedState)
  : {
      selectedDay: new Date().toISOString().split("T")[0],
      tasks: {},
    };

/* ===================================
   REDUCER
=================================== */

function plannerReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_DAY:
      return {
        ...state,
        selectedDay: action.payload,
      };

    case ADD_TASK: {
      const { day, task } = action.payload;

      return {
        ...state,
        tasks: {
          ...state.tasks,
          [day]: [...(state.tasks[day] || []), task],
        },
      };
    }

    case EDIT_TASK: {
      const { day, taskId, updatedText } =
        action.payload;

      return {
        ...state,
        tasks: {
          ...state.tasks,
          [day]: state.tasks[day].map((task) =>
            task.id === taskId
              ? { ...task, text: updatedText }
              : task
          ),
        },
      };
    }

    case DELETE_TASK: {
      const { day, taskId } = action.payload;

      return {
        ...state,
        tasks: {
          ...state.tasks,
          [day]: state.tasks[day].filter(
            (task) => task.id !== taskId
          ),
        },
      };
    }

    default:
      return state;
  }
}

/* ===================================
   STORE
=================================== */

const store = createStore(
  plannerReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

/* ===================================
   SAVE TO LOCAL STORAGE
=================================== */

store.subscribe(() => {
  localStorage.setItem(
    "plannerState",
    JSON.stringify(store.getState())
  );
});

/* ===================================
   MAIN COMPONENT
=================================== */

function Planner({
  selectedDay,
  tasks,
  selectDay,
  addTask,
  editTask,
  deleteTask,
}) {
  const [newTask, setNewTask] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] =
    useState("");

  const dayTasks = tasks[selectedDay] || [];

  const handleAddTask = () => {
    if (!newTask.trim()) {
      alert("Task cannot be empty");
      return;
    }

    const task = {
      id: Date.now(),
      text: newTask,
    };

    addTask(selectedDay, task);
    setNewTask("");
  };

  const handleEditSave = (id) => {
    if (!editingText.trim()) {
      alert("Task cannot be empty");
      return;
    }

    editTask(selectedDay, id, editingText);
    setEditingId(null);
    setEditingText("");
  };

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "30px auto",
        padding: "20px",
      }}
    >
      <h1>Daily Planner</h1>

      {/* DATE PICKER */}

      <div style={{ marginBottom: "20px" }}>
        <input
          type="date"
          value={selectedDay}
          onChange={(e) =>
            selectDay(e.target.value)
          }
        />
      </div>

      {/* ADD TASK */}

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter task"
          value={newTask}
          onChange={(e) =>
            setNewTask(e.target.value)
          }
          style={{
            width: "70%",
            padding: "8px",
          }}
        />

        <button
          onClick={handleAddTask}
          style={{ marginLeft: "10px" }}
        >
          Add Task
        </button>
      </div>

      {/* TASK LIST */}

      <h3>Tasks for {selectedDay}</h3>

      {dayTasks.length === 0 ? (
        <p>No tasks scheduled.</p>
      ) : (
        <ul
          style={{
            listStyle: "none",
            padding: 0,
          }}
        >
          {dayTasks.map((task) => (
            <li
              key={task.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "5px",
              }}
            >
              {editingId === task.id ? (
                <>
                  <input
                    value={editingText}
                    onChange={(e) =>
                      setEditingText(
                        e.target.value
                      )
                    }
                  />

                  <button
                    onClick={() =>
                      handleEditSave(task.id)
                    }
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <span>{task.text}</span>

                  <button
                    style={{
                      marginLeft: "10px",
                    }}
                    onClick={() => {
                      setEditingId(task.id);
                      setEditingText(
                        task.text
                      );
                    }}
                  >
                    Edit
                  </button>

                  <button
                    style={{
                      marginLeft: "10px",
                    }}
                    onClick={() =>
                      deleteTask(
                        selectedDay,
                        task.id
                      )
                    }
                  >
                    Delete
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* ===================================
   REDUX CONNECTION
=================================== */

const mapStateToProps = (state) => ({
  selectedDay: state.selectedDay,
  tasks: state.tasks,
});

const mapDispatchToProps = {
  selectDay,
  addTask,
  editTask,
  deleteTask,
};

const ConnectedPlanner = connect(
  mapStateToProps,
  mapDispatchToProps
)(Planner);

/* ===================================
   APP COMPONENT
=================================== */

function App() {
  return (
    <Provider store={store}>
      <ConnectedPlanner />
    </Provider>
  );
}

export default App;
```

# Explanation

## Redux Store Structure

```javascript
{
  selectedDay: "2026-06-03",
  tasks: {
    "2026-06-03": [
      {
        id: 1,
        text: "Study Redux"
      }
    ]
  }
}
```

Each date acts as a key and stores an array of tasks.

---

## Actions Implemented

### Select Day

```javascript
SELECT_DAY
```

Changes the currently selected date.

### Add Task

```javascript
ADD_TASK
```

Adds a task to a specific day.

### Edit Task

```javascript
EDIT_TASK
```

Updates an existing task.

### Delete Task

```javascript
DELETE_TASK
```

Removes a task from the selected day.

---

## Features Included

✅ Redux Store Configuration

✅ Action Creators

✅ Reducers

✅ Date Picker

✅ Task Display Component

✅ Add Tasks

✅ Edit Tasks

✅ Delete Tasks

✅ React-Redux connect()

✅ mapStateToProps

✅ mapDispatchToProps

✅ Local Storage Persistence

✅ Validation

✅ Redux DevTools Support

---

## Required Packages

```bash
npm install redux react-redux
```

Run the application:

```bash
npm start
```

---

## Testing Checklist

### Date Selection

* Select different dates.
* Verify each date maintains its own tasks.

### Add Task

* Enter a task.
* Click Add Task.
* Verify it appears under the selected date.

### Edit Task

* Click Edit.
* Modify task text.
* Save changes.
* Verify update appears.

### Delete Task

* Click Delete.
* Verify task is removed.

### Persistence

* Refresh browser.
* Verify tasks remain stored.

### Redux DevTools

* Open Redux DevTools.
* Observe dispatched actions and state updates.

Expected Result:

A fully functional Daily Planner application where users can select any day, create tasks for that day, edit tasks, delete tasks, and retain data using Local Storage while Redux manages the application state.

```
```
