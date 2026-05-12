import React, { Component } from "react";

class Child extends Component {
  componentWillUnmount() {
    alert("Component is unmounted!");
  }

  render() {
    return <h1>Hello World!</h1>;
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  deleteChild = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        {this.state.show && <Child />}

        <button onClick={this.deleteChild}>
          Delete
        </button>
      </div>
    );
  }
}

export default App;