# Exercise 1: Basic Todo List with React-Redux

```jsx
// App.js

import React, { useState } from "react";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";

/* ===========================
   ACTION TYPES
=========================== */

const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const REMOVE_TODO = "REMOVE_TODO";

/* ===========================
   ACTION CREATORS
=========================== */

const addTodo = (text) => ({
  type: ADD_TODO,
  payload: text,
});

const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id,
});

const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id,
});

/* ===========================
   INITIAL STATE
=========================== */

const initialState = {
  todos: [],
};

/* ===========================
   REDUCER
=========================== */

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.payload,
            completed: false,
          },
        ],
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(
          (todo) => todo.id !== action.payload
        ),
      };

    default:
      return state;
  }
}

/* ===========================
   STORE
=========================== */

const store = createStore(
  todoReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

/* ===========================
   COMPONENTS
=========================== */

function TodoApp({
  todos,
  addTodo,
  toggleTodo,
  removeTodo,
}) {
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (input.trim() === "") return;

    addTodo(input);
    setInput("");
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
      }}
    >
      <h1>Redux Todo List</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={input}
          placeholder="Enter a todo..."
          onChange={(e) => setInput(e.target.value)}
          style={{
            padding: "8px",
            width: "70%",
            marginRight: "10px",
          }}
        />

        <button onClick={handleAddTodo}>
          Add Todo
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          >
            <span
              onClick={() => toggleTodo(todo.id)}
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
              onClick={() => removeTodo(todo.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ===========================
   REDUX CONNECTION
=========================== */

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  addTodo,
  toggleTodo,
  removeTodo,
};

const ConnectedTodoApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);

/* ===========================
   MAIN APP
=========================== */

function App() {
  return (
    <Provider store={store}>
      <ConnectedTodoApp />
    </Provider>
  );
}

export default App;
```

# Explanation

## 1. Redux Store

A Redux store is created using `createStore()` and the `todoReducer`.

```javascript
const store = createStore(todoReducer);
```

## 2. Actions

Three action types are defined:

* ADD_TODO
* TOGGLE_TODO
* REMOVE_TODO

Action creators return action objects that contain a `type` and a `payload`.

## 3. Reducer

The reducer updates the state based on dispatched actions while maintaining immutability.

Examples:

* Adding a todo creates a new array.
* Toggling a todo uses `map()`.
* Removing a todo uses `filter()`.

## 4. React Components

The application contains:

* Input field for adding todos
* Todo list display
* Toggle completion functionality
* Remove todo functionality

## 5. React-Redux Connection

`connect()` is used to connect the component to the Redux store.

```javascript
connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);
```

## 6. Testing

Verify the following:

1. Add a todo and check that it appears in the list.
2. Click a todo to mark it completed.
3. Click Remove to delete a todo.
4. Open Redux DevTools to observe state updates.

## Required Packages

Install dependencies:

```bash
npm install redux react-redux
```

Run the application:

```bash
npm start
```

Expected Output:

* User can add tasks.
* User can mark tasks as complete.
* User can remove tasks.
* Redux manages the application state.

```
```
