# Exercise 1: Fetching User Data with Redux Thunk

```javascript
// App.js

import React, { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

/* =========================================
   USER SLICE
========================================= */

const userSlice = createSlice({
  name: "user",

  initialState: {
    user: null,
    loading: false,
    error: null,
  },

  reducers: {
    fetchUserStart: (state) => {
      state.loading = true;
      state.error = null;
    },

    fetchUserSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },

    fetchUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const {
  fetchUserStart,
  fetchUserSuccess,
  fetchUserFailure,
} = userSlice.actions;

/* =========================================
   THUNK ACTION CREATOR
========================================= */

const fetchUser = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchUserStart());

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );

      if (!response.ok) {
        throw new Error(
          "Failed to fetch user data"
        );
      }

      const data = await response.json();

      dispatch(fetchUserSuccess(data));
    } catch (error) {
      dispatch(
        fetchUserFailure(error.message)
      );
    }
  };
};

/* =========================================
   STORE CONFIGURATION
========================================= */

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

/*
Redux Toolkit automatically includes
redux-thunk middleware.
*/

/* =========================================
   USER DATA COMPONENT
========================================= */

function UserData() {
  const dispatch = useDispatch();

  const { user, loading, error } =
    useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (loading) {
    return <h3>Loading user data...</h3>;
  }

  if (error) {
    return (
      <h3 style={{ color: "red" }}>
        Error: {error}
      </h3>
    );
  }

  return (
    <div>
      <h2>User Information</h2>

      {user ? (
        <div
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            borderRadius: "5px",
          }}
        >
          <p>
            <strong>ID:</strong> {user.id}
          </p>

          <p>
            <strong>Name:</strong>{" "}
            {user.name}
          </p>

          <p>
            <strong>Username:</strong>{" "}
            {user.username}
          </p>

          <p>
            <strong>Email:</strong>{" "}
            {user.email}
          </p>

          <p>
            <strong>Phone:</strong>{" "}
            {user.phone}
          </p>

          <p>
            <strong>Website:</strong>{" "}
            {user.website}
          </p>
        </div>
      ) : (
        <p>No user data found.</p>
      )}
    </div>
  );
}

/* =========================================
   APP COMPONENT
========================================= */

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
        <h1>
          Redux Thunk User Data Fetcher
        </h1>

        <UserData />
      </div>
    </Provider>
  );
}

export default App;
```

---

# Explanation

## Step 1: Configure Redux Store

Redux Toolkit's `configureStore()` is used to create the store.

```javascript
const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
```

Redux Toolkit automatically includes the **Redux Thunk middleware**, so no extra configuration is needed.

---

## Step 2: Create User Slice

The slice manages:

* User data
* Loading state
* Error state

Initial State:

```javascript
{
  user: null,
  loading: false,
  error: null
}
```

Reducers:

* `fetchUserStart`
* `fetchUserSuccess`
* `fetchUserFailure`

---

## Step 3: Create Thunk Action

The thunk performs an asynchronous API request.

```javascript
const fetchUser = () => {
  return async (dispatch) => {
    ...
  };
};
```

API Used:

```javascript
https://jsonplaceholder.typicode.com/users/1
```

---

## Step 4: UserData Component

Uses:

```javascript
useSelector()
```

to access:

* user
* loading
* error

Uses:

```javascript
useDispatch()
```

to dispatch:

```javascript
dispatch(fetchUser());
```

inside `useEffect()`.

---

## Step 5: Redux Connection

### Access State

```javascript
const { user, loading, error } =
  useSelector((state) => state.user);
```

### Dispatch Thunk

```javascript
dispatch(fetchUser());
```

---

## Step 6: Testing

### Fetch User Data

1. Start application.
2. Verify loading message appears.
3. Verify user data is fetched.

### Display User Data

Expected fields:

* ID
* Name
* Username
* Email
* Phone
* Website

### Error Handling

To test errors:

Replace API URL with:

```javascript
https://jsonplaceholder.typicode.com/invalid
```

Expected result:

```text
Error: Failed to fetch user data
```

---

# Required Packages

Install dependencies:

```bash
npm install react-redux @reduxjs/toolkit
```

---

# Run Application

```bash
npm start
```

---

# Expected Output

✅ Redux Toolkit Store

✅ Redux Thunk Middleware

✅ API Data Fetching

✅ Loading State

✅ Error Handling

✅ User Data Display

✅ useSelector Hook

✅ useDispatch Hook

✅ Single-file Implementation
