import React, { Component } from "react";
import ErrorBoundary from "./ErrorBoundary";

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  handleClick = () => {
    this.setState((prev) => ({ counter: prev.counter + 1 }));
  };

  render() {
    if (this.state.counter === 5) {
      throw new Error("I crashed!");
    }

    return (
      <h1 onClick={this.handleClick}>
        {this.state.counter}
      </h1>
    );
  }
}

// ---------------- SIMULATION WRAPPERS ----------------

function App() {
  return (
    <div>

      {/* Simulation 1 */}
      <h2>Simulation 1</h2>
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>

      {/* Simulation 2 */}
      <h2>Simulation 2</h2>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      {/* Simulation 3 */}
      <h2>Simulation 3</h2>
      <BuggyCounter />

    </div>
  );
}

export default App;