# Daily Challenge: Age Tracker with Redux Toolkit and Thunk

```javascript
// App.js

import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import {
  configureStore,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

/* =========================================
   ASYNC THUNK ACTIONS
========================================= */

// Age Up Async
export const ageUpAsync = createAsyncThunk(
  "age/ageUpAsync",
  async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(1);
      }, 2000);
    });
  }
);

// Age Down Async
export const ageDownAsync = createAsyncThunk(
  "age/ageDownAsync",
  async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(1);
      }, 2000);
    });
  }
);

/* =========================================
   AGE SLICE
========================================= */

const ageSlice = createSlice({
  name: "age",

  initialState: {
    age: 20,
    loading: false,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder

      // AGE UP

      .addCase(ageUpAsync.pending, (state) => {
        state.loading = true;
      })

      .addCase(
        ageUpAsync.fulfilled,
        (state, action) => {
          state.loading = false;
          state.age += action.payload;
        }
      )

      .addCase(ageUpAsync.rejected, (state) => {
        state.loading = false;
      })

      // AGE DOWN

      .addCase(ageDownAsync.pending, (state) => {
        state.loading = true;
      })

      .addCase(
        ageDownAsync.fulfilled,
        (state, action) => {
          state.loading = false;
          state.age -= action.payload;
        }
      )

      .addCase(ageDownAsync.rejected, (state) => {
        state.loading = false;
      });
  },
});

/* =========================================
   STORE
========================================= */

const store = configureStore({
  reducer: {
    age: ageSlice.reducer,
  },
});

/*
Redux Toolkit automatically includes
Thunk middleware.
*/

/* =========================================
   AGE DISPLAY COMPONENT
========================================= */

function AgeDisplay() {
  const { age, loading } = useSelector(
    (state) => state.age
  );

  return (
    <div
      style={{
        textAlign: "center",
        marginBottom: "30px",
      }}
    >
      <h2>Current Age</h2>

      <h1>{age}</h1>

      {loading && (
        <div>
          <h3>⏳ Updating Age...</h3>
        </div>
      )}
    </div>
  );
}

/* =========================================
   AGE CONTROLS COMPONENT
========================================= */

function AgeControls() {
  const dispatch = useDispatch();

  const loading = useSelector(
    (state) => state.age.loading
  );

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        justifyContent: "center",
      }}
    >
      <button
        disabled={loading}
        onClick={() =>
          dispatch(ageUpAsync())
        }
      >
        Age Up
      </button>

      <button
        disabled={loading}
        onClick={() =>
          dispatch(ageDownAsync())
        }
      >
        Age Down
      </button>
    </div>
  );
}

/* =========================================
   MAIN APP
========================================= */

function AgeTracker() {
  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "50px auto",
        textAlign: "center",
      }}
    >
      <h1>Age Tracker</h1>

      <AgeDisplay />

      <AgeControls />
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AgeTracker />
    </Provider>
  );
}

export default App;
```

---

# Explanation

## 1. Redux Toolkit Setup

The Redux store is created using:

```javascript
configureStore()
```

```javascript
const store = configureStore({
  reducer: {
    age: ageSlice.reducer,
  },
});
```

Redux Toolkit automatically includes the **Thunk middleware**.

---

## 2. Async Actions with createAsyncThunk

### Age Up

```javascript
const ageUpAsync = createAsyncThunk(...)
```

Simulates a 2-second delay and then increases age by 1.

### Age Down

```javascript
const ageDownAsync = createAsyncThunk(...)
```

Simulates a 2-second delay and then decreases age by 1.

---

## 3. Age Slice

Initial State:

```javascript
{
  age: 20,
  loading: false
}
```

Extra Reducers handle:

### Pending

```javascript
state.loading = true;
```

### Fulfilled

```javascript
state.loading = false;
state.age += 1;
```

or

```javascript
state.age -= 1;
```

### Rejected

```javascript
state.loading = false;
```

---

## 4. AgeDisplay Component

Uses:

```javascript
useSelector()
```

to display:

* Current age
* Loading message

```javascript
{loading && <h3>⏳ Updating Age...</h3>}
```

---

## 5. AgeControls Component

Uses:

```javascript
useDispatch()
```

to dispatch:

```javascript
dispatch(ageUpAsync());
```

and

```javascript
dispatch(ageDownAsync());
```

Buttons are disabled while loading.

---

## 6. Testing

### Age Up

1. Click **Age Up**
2. Loading message appears
3. Wait 2 seconds
4. Age increases by 1

### Age Down

1. Click **Age Down**
2. Loading message appears
3. Wait 2 seconds
4. Age decreases by 1

### Loading State

Verify:

* Loading indicator appears during delay
* Buttons become disabled
* Buttons re-enable after update

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

✅ createSlice()

✅ createAsyncThunk()

✅ Async Age Increment

✅ Async Age Decrement

✅ Loading Indicator

✅ useSelector()

✅ useDispatch()

✅ Redux Thunk Middleware

✅ Single-file Implementation

```
```
