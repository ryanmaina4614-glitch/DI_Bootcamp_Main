# Exercise 1: Book Inventory Selector

```javascript
// App.js

import React, { useState } from "react";
import { Provider, useSelector } from "react-redux";
import {
  configureStore,
  createSlice,
  createSelector,
} from "@reduxjs/toolkit";

/* =========================================
   BOOK SLICE
========================================= */

const bookSlice = createSlice({
  name: "books",

  initialState: {
    books: [
      {
        id: 1,
        title: "Dracula",
        author: "Bram Stoker",
        genre: "Horror",
      },
      {
        id: 2,
        title: "It",
        author: "Stephen King",
        genre: "Horror",
      },
      {
        id: 3,
        title: "Harry Potter",
        author: "J.K. Rowling",
        genre: "Fantasy",
      },
      {
        id: 4,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
      },
      {
        id: 5,
        title: "Dune",
        author: "Frank Herbert",
        genre: "Science Fiction",
      },
      {
        id: 6,
        title: "Foundation",
        author: "Isaac Asimov",
        genre: "Science Fiction",
      },
    ],
  },

  reducers: {},
});

/* =========================================
   STORE
========================================= */

const store = configureStore({
  reducer: {
    books: bookSlice.reducer,
  },
});

/* =========================================
   SELECTORS
========================================= */

// Base Selector

const selectBooks = (state) =>
  state.books.books;

// Horror Books

const selectHorrorBooks = createSelector(
  [selectBooks],
  (books) =>
    books.filter(
      (book) => book.genre === "Horror"
    )
);

// Fantasy Books

const selectFantasyBooks = createSelector(
  [selectBooks],
  (books) =>
    books.filter(
      (book) => book.genre === "Fantasy"
    )
);

// Science Fiction Books

const selectScienceFictionBooks =
  createSelector(
    [selectBooks],
    (books) =>
      books.filter(
        (book) =>
          book.genre ===
          "Science Fiction"
      )
  );

/* =========================================
   BOOK LIST COMPONENT
========================================= */

function BookList() {
  const [selectedGenre, setSelectedGenre] =
    useState("All");

  const allBooks =
    useSelector(selectBooks);

  const horrorBooks =
    useSelector(selectHorrorBooks);

  const fantasyBooks =
    useSelector(selectFantasyBooks);

  const scienceFictionBooks =
    useSelector(
      selectScienceFictionBooks
    );

  let displayedBooks = allBooks;

  switch (selectedGenre) {
    case "Horror":
      displayedBooks = horrorBooks;
      break;

    case "Fantasy":
      displayedBooks = fantasyBooks;
      break;

    case "Science Fiction":
      displayedBooks =
        scienceFictionBooks;
      break;

    default:
      displayedBooks = allBooks;
  }

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "40px auto",
      }}
    >
      <h1>Book Inventory</h1>

      {/* Genre Buttons */}

      <div
        style={{
          marginBottom: "20px",
        }}
      >
        <button
          onClick={() =>
            setSelectedGenre("All")
          }
        >
          All
        </button>

        <button
          onClick={() =>
            setSelectedGenre("Horror")
          }
          style={{ marginLeft: "10px" }}
        >
          Horror
        </button>

        <button
          onClick={() =>
            setSelectedGenre("Fantasy")
          }
          style={{ marginLeft: "10px" }}
        >
          Fantasy
        </button>

        <button
          onClick={() =>
            setSelectedGenre(
              "Science Fiction"
            )
          }
          style={{ marginLeft: "10px" }}
        >
          Science Fiction
        </button>
      </div>

      {/* Display Books */}

      <h2>
        {selectedGenre} Books
      </h2>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
        }}
      >
        {displayedBooks.map((book) => (
          <li
            key={book.id}
            style={{
              border: "1px solid #ccc",
              marginBottom: "10px",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <h3>{book.title}</h3>

            <p>
              <strong>Author:</strong>{" "}
              {book.author}
            </p>

            <p>
              <strong>Genre:</strong>{" "}
              {book.genre}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* =========================================
   APP COMPONENT
========================================= */

function App() {
  return (
    <Provider store={store}>
      <BookList />
    </Provider>
  );
}

export default App;
```

---

# Explanation

## Step 1: Redux Store Setup

The store is configured using Redux Toolkit.

```javascript
const store = configureStore({
  reducer: {
    books: bookSlice.reducer,
  },
});
```

---

## Step 2: Initial State

The state contains a collection of books.

```javascript
{
  books: [
    {
      id: 1,
      title: "Dracula",
      author: "Bram Stoker",
      genre: "Horror"
    }
  ]
}
```

Each book contains:

* id
* title
* author
* genre

---

## Step 3: Selectors

### Base Selector

```javascript
const selectBooks = (state) =>
  state.books.books;
```

Returns all books.

### Horror Books Selector

```javascript
const selectHorrorBooks =
  createSelector(
    [selectBooks],
    (books) =>
      books.filter(
        (book) =>
          book.genre === "Horror"
      )
  );
```

### Fantasy Books Selector

```javascript
const selectFantasyBooks =
  createSelector(
    [selectBooks],
    (books) =>
      books.filter(
        (book) =>
          book.genre === "Fantasy"
      )
  );
```

### Science Fiction Selector

```javascript
const selectScienceFictionBooks =
  createSelector(
    [selectBooks],
    (books) =>
      books.filter(
        (book) =>
          book.genre ===
          "Science Fiction"
      )
  );
```

---

## Step 4: React Component

The BookList component:

* Uses `useSelector`
* Retrieves data through selectors
* Displays books dynamically

```javascript
const horrorBooks =
  useSelector(selectHorrorBooks);
```

---

## Step 5: UI Interaction

Genre buttons allow users to switch between:

* All Books
* Horror
* Fantasy
* Science Fiction

When a button is clicked:

```javascript
setSelectedGenre("Fantasy");
```

The displayed book list updates automatically.

---

## Step 6: Testing

### All Books

Displays every book in inventory.

### Horror Books

Displays:

* Dracula
* It

### Fantasy Books

Displays:

* Harry Potter
* The Hobbit

### Science Fiction Books

Displays:

* Dune
* Foundation

Verify that changing genres updates the displayed books correctly.

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

✅ createSelector()

✅ Genre Filtering

✅ React-Redux Integration

✅ Dynamic UI Updates

✅ Horror Book Selector

✅ Fantasy Book Selector

✅ Science Fiction Book Selector

✅ Single-file Implementation

```
```
