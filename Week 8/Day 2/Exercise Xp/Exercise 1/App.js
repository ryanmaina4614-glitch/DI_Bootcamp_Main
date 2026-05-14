import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import ErrorBoundary from "./ErrorBoundary";

// Home Component
function HomeScreen() {
  return <h1>Home</h1>;
}

// Profile Component
function ProfileScreen() {
  return <h1>Profile</h1>;
}

// Shop Component (throws error)
function ShopScreen() {
  throw new Error("Shop crashed!");
}

function App() {
  return (
    <BrowserRouter>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
        <div className="container-fluid">

          <NavLink className="navbar-brand" to="/">
            Home
          </NavLink>

          <NavLink className="navbar-brand" to="/profile">
            Profile
          </NavLink>

          <NavLink className="navbar-brand" to="/shop">
            Shop
          </NavLink>

        </div>
      </nav>

      {/* Routes */}
      <Routes>

        <Route
          path="/"
          element={
            <ErrorBoundary>
              <HomeScreen />
            </ErrorBoundary>
          }
        />

        <Route
          path="/profile"
          element={
            <ErrorBoundary>
              <ProfileScreen />
            </ErrorBoundary>
          }
        />

        <Route
          path="/shop"
          element={
            <ErrorBoundary>
              <ShopScreen />
            </ErrorBoundary>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;