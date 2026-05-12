import React, { Component } from "react";

class Color extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: "red",
    };
  }

  // Part I
  shouldComponentUpdate() {
    return true;
  }

  changeColor = () => {
    this.setState({ favoriteColor: "blue" });
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
    }, 2000);
  }

  // Part III
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("in getSnapshotBeforeUpdate");
    return null;
  }

  // Part II
  componentDidUpdate() {
    console.log("after update");
  }

  render() {
    return (
      <div>
        <h1>{this.state.favoriteColor}</h1>
        <button onClick={this.changeColor}>
          Change to Blue
        </button>
      </div>
    );
  }
}

export default Color;