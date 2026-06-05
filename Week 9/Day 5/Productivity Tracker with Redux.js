# Productivity Tracker with Redux Performance Optimizations

```javascript
// App.js

import React, {
  useState,
  useCallback,
} from "react";

import {
  Provider,
  useDispatch,
  useSelector,
} from "react-redux";

import {
  configureStore,
  createSlice,
  createSelector,
} from "@reduxjs/toolkit";

/* =========================================
   TASK SLICE
========================================= */

const taskSlice = createSlice({
  name: "tasks",

  initialState: [
    {
      id: 1,
      title: "Complete Redux Assignment",
      categoryId: 1,
      completed: false,
    },
    {
      id: 2,
      title: "Study React Hooks",
      categoryId: 2,
      completed: true,
    },
  ],

  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },

    editTask: (state, action) => {
      const task = state.find(
        (task) => task.id === action.payload.id
      );

      if (task) {
        task.title = action.payload.title;
      }
    },

    deleteTask: (state, action) => {
      return state.filter(
        (task) => task.id !== action.payload
      );
    },

    updateTaskProgress: (
      state,
      action
    ) => {
      const task = state.find(
        (task) => task.id === action.payload
      );

      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

/* =========================================
   CATEGORY SLICE
========================================= */

const categorySlice = createSlice({
  name: "categories",

  initialState: [
    {
      id: 1,
      name: "Assignments",
    },
    {
      id: 2,
      name: "Study",
    },
    {
      id: 3,
      name: "Personal",
    },
  ],

  reducers: {
    addCategory: (state, action) => {
      state.push(action.payload);
    },

    editCategory: (state, action) => {
      const category = state.find(
        (c) => c.id === action.payload.id
      );

      if (category) {
        category.name =
          action.payload.name;
      }
    },

    deleteCategory: (
      state,
      action
    ) => {
      return state.filter(
        (category) =>
          category.id !== action.payload
      );
    },
  },
});

/* =========================================
   ACTIONS
========================================= */

const {
  addTask,
  editTask,
  deleteTask,
  updateTaskProgress,
} = taskSlice.actions;

const {
  addCategory,
  editCategory,
  deleteCategory,
} = categorySlice.actions;

/* =========================================
   STORE
========================================= */

const store = configureStore({
  reducer: {
    tasks: taskSlice.reducer,
    categories: categorySlice.reducer,
  },
});

/* =========================================
   SELECTORS
========================================= */

const selectTasks = (state) =>
  state.tasks;

const selectCategories = (state) =>
  state.categories;

/* Tasks By Category */

const selectTasksByCategory =
  createSelector(
    [
      selectTasks,
      (_, categoryId) => categoryId,
    ],
    (tasks, categoryId) =>
      tasks.filter(
        (task) =>
          task.categoryId === categoryId
      )
  );

/* Completed Tasks Count */

const selectCompletedTasks =
  createSelector(
    [selectTasks],
    (tasks) =>
      tasks.filter(
        (task) => task.completed
      ).length
  );

/* Category By ID */

const selectCategoryById =
  createSelector(
    [
      selectCategories,
      (_, id) => id,
    ],
    (categories, id) =>
      categories.find(
        (category) =>
          category.id === id
      )
  );

/* =========================================
   CATEGORY SELECTOR COMPONENT
========================================= */

function CategorySelector({
  selectedCategory,
  setSelectedCategory,
}) {
  const categories = useSelector(
    selectCategories
  );

  return (
    <div>
      <h3>Select Category</h3>

      <select
        value={selectedCategory}
        onChange={(e) =>
          setSelectedCategory(
            Number(e.target.value)
          )
        }
      >
        {categories.map((category) => (
          <option
            key={category.id}
            value={category.id}
          >
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}

/* =========================================
   TASK LIST COMPONENT
========================================= */

function TaskList({
  selectedCategory,
}) {
  const dispatch = useDispatch();

  const tasks = useSelector((state) =>
    selectTasksByCategory(
      state,
      selectedCategory
    )
  );

  const completedTasks =
    useSelector(
      selectCompletedTasks
    );

  const handleComplete =
    useCallback(
      (id) => {
        dispatch(
          updateTaskProgress(id)
        );
      },
      [dispatch]
    );

  const handleEdit = useCallback(
    (id) => {
      const title =
        prompt("Edit task:");

      if (title) {
        dispatch(
          editTask({
            id,
            title,
          })
        );
      }
    },
    [dispatch]
  );

  const handleDelete =
    useCallback(
      (id) => {
        dispatch(deleteTask(id));
      },
      [dispatch]
    );

  return (
    <div>
      <h2>Tasks</h2>

      <p>
        Completed Tasks:
        {" "}
        {completedTasks}
      </p>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              style={{
                textDecoration:
                  task.completed
                    ? "line-through"
                    : "none",
              }}
            >
              {task.title}
            </span>

            <button
              onClick={() =>
                handleComplete(
                  task.id
                )
              }
            >
              Complete
            </button>

            <button
              onClick={() =>
                handleEdit(task.id)
              }
            >
              Edit
            </button>

            <button
              onClick={() =>
                handleDelete(
                  task.id
                )
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* =========================================
   PRODUCTIVITY TRACKER
========================================= */

function ProductivityTracker() {
  const [selectedCategory, setSelectedCategory] =
    useState(1);

  const category =
    useSelector((state) =>
      selectCategoryById(
        state,
        selectedCategory
      )
    );

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <h1>
        Productivity Tracker
      </h1>

      <CategorySelector
        selectedCategory={
          selectedCategory
        }
        setSelectedCategory={
          setSelectedCategory
        }
      />

      <h3>
        Current Category:
        {" "}
        {category?.name}
      </h3>

      <TaskList
        selectedCategory={
          selectedCategory
        }
      />
    </div>
  );
}

/* =========================================
   APP
========================================= */

function App() {
  return (
    <Provider store={store}>
      <ProductivityTracker />
    </Provider>
  );
}

export default App;
```

---

# Concepts Demonstrated

## Redux Setup

Uses Redux Toolkit:

```javascript
configureStore()
createSlice()
```

State is divided into:

* Tasks
* Categories

---

## Actions Implemented

### Task Actions

* addTask
* editTask
* deleteTask
* updateTaskProgress

### Category Actions

* addCategory
* editCategory
* deleteCategory

---

## Performance Optimization with createSelector

### selectTasksByCategory

```javascript
createSelector(...)
```

Returns only tasks belonging to the selected category.

### selectCompletedTasks

Computes:

```javascript
completed task count
```

### selectCategoryById

Returns category information by ID.

Because selectors are memoized, expensive recalculations are avoided.

---

## Performance Optimization with useCallback

Memoized event handlers:

```javascript
handleComplete
handleEdit
handleDelete
```

Example:

```javascript
const handleComplete =
  useCallback(() => {}, []);
```

Prevents unnecessary function recreation and component re-renders.

---

## UI Features

### Category Selector

Allows switching between:

* Assignments
* Study
* Personal

### Task List

Displays tasks for selected category.

### Task Completion

Toggle completed status.

### Task Editing

Edit task titles.

### Task Deletion

Remove tasks.

### Completed Task Counter

Displays total completed tasks.

---

# Required Packages

```bash
npm install @reduxjs/toolkit react-redux
```

---

# Run Application

```bash
npm start
```

---

# Expected Output

✅ Redux Toolkit Store

✅ Task Management

✅ Category Management

✅ createSelector Optimization

✅ useCallback Optimization

✅ Category Filtering

✅ Completed Task Counter

✅ Task Editing

✅ Task Completion

✅ Task Deletion

✅ Single-file Implementation

```
```
