# Exercise 1: Basic Todo List with React-Redux and Redux Toolkit

```javascript
// App.js

import React, { useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

/* ==================================
   STEP 1: TODO SLICE
================================== */

const todoSlice = createSlice({
  name: "todos",

  initialState: {
    todos: [],
  },

  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },

    toggleTodo: (state, action) => {
      const todo = state.todos.find(
        (todo) => todo.id === action.payload
      );

      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
    },
  },
});

/* ==================================
   EXPORT ACTIONS
================================== */

const { addTodo, toggleTodo, removeTodo } =
  todoSlice.actions;

/* ==================================
   STEP 2: STORE CONFIGURATION
================================== */

const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});

/* ==================================
   STEP 3: REACT COMPONENTS
================================== */

/* ---------- AddTodo Component ---------- */

function AddTodo() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!text.trim()) {
      alert("Please enter a todo.");
      return;
    }

    dispatch(addTodo(text));
    setText("");
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Enter a todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          padding: "8px",
          width: "250px",
        }}
      />

      <button
        onClick={handleSubmit}
        style={{ marginLeft: "10px" }}
      >
        Add Todo
      </button>
    </div>
  );
}

/* ---------- TodoItem Component ---------- */

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "10px",
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "5px",
      }}
    >
      <span
        onClick={() =>
          dispatch(toggleTodo(todo.id))
        }
        style={{
          cursor: "pointer",
          textDecoration: todo.completed
            ? "line-through"
            : "none",
        }}
      >
        {todo.text}
      </span>

      <button
        onClick={() =>
          dispatch(removeTodo(todo.id))
        }
      >
        Remove
      </button>
    </li>
  );
}

/* ---------- TodoList Component ---------- */

function TodoList() {
  const todos = useSelector(
    (state) => state.todos.todos
  );

  return (
    <div>
      <h2>Todo List</h2>

      {todos.length === 0 ? (
        <p>No todos available.</p>
      ) : (
        <ul
          style={{
            listStyle: "none",
            padding: 0,
          }}
        >
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

/* ==================================
   MAIN APP COMPONENT
================================== */

function App() {
  return (
    <Provider store={store}>
      <div
        style={{
          maxWidth: "600px",
          margin: "40px auto",
          padding: "20px",
        }}
      >
        <h1>Redux Toolkit Todo App</h1>

        <AddTodo />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
```

# Explanation

## Step 1: Create Redux Toolkit Slice

A slice is created using `createSlice()`.

Reducers included:

* `addTodo`
* `toggleTodo`
* `removeTodo`

```javascript
const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo,
    toggleTodo,
    removeTodo,
  },
});
```

---

## Step 2: Configure Redux Store

The Redux store is configured using `configureStore()`.

```javascript
const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});
```

---

## Step 3: Components

### AddTodo

Uses:

```javascript
useDispatch()
```

to dispatch:

```javascript
dispatch(addTodo(text));
```

---

### TodoList

Uses:

```javascript
useSelector()
```

to retrieve todos from the store.

```javascript
const todos = useSelector(
  (state) => state.todos.todos
);
```

---

### TodoItem

Provides functionality to:

* Toggle completion status
* Remove todo

```javascript
dispatch(toggleTodo(todo.id));
dispatch(removeTodo(todo.id));
```

---

## Step 4: React-Redux Hooks

### useSelector

Reads state from Redux.

```javascript
useSelector((state) => state.todos.todos);
```

### useDispatch

Dispatches actions to Redux.

```javascript
const dispatch = useDispatch();
```

---

## Step 5: Testing

### Add Todo

1. Type a todo.
2. Click Add Todo.
3. Verify it appears in the list.

### Toggle Todo

1. Click a todo item.
2. Verify text is crossed out.

### Remove Todo

1. Click Remove.
2. Verify item disappears.

### Overall Functionality

Verify:

* Todos can be added.
* Todos can be completed.
* Todos can be removed.
* UI updates automatically through Redux state changes.

---

# Required Packages

Install dependencies:

```bash
npm install react-redux @reduxjs/toolkit
```

Run application:

```bash
npm start
```

# Expected Output

✅ Add Todo

✅ Complete Todo

✅ Remove Todo

✅ Redux Toolkit State Management

✅ React-Redux Hooks (`useSelector`, `useDispatch`)

✅ Single-file implementation

```
```
