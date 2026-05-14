import React, { Component } from "react";
import "./App.css";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      message: "",
      post: "",
      responseToPost: "",
    };
  }

  // FETCH GET MESSAGE
  async componentDidMount() {
    try {

      const response = await fetch(
        "http://localhost:5000/api/hello"
      );

      const data = await response.text();

      this.setState({
        message: data,
      });

    } catch (error) {
      console.log(error);
    }
  }

  // HANDLE INPUT
  handleChange = (event) => {
    this.setState({
      post: event.target.value,
    });
  };

  // HANDLE SUBMIT
  handleSubmit = async (event) => {
    event.preventDefault();

    try {

      const response = await fetch(
        "http://localhost:5000/api/world",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            post: this.state.post,
          }),
        }
      );

      const data = await response.text();

      this.setState({
        responseToPost: data,
      });

    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="App">

        <h1>{this.state.message}</h1>

        <form onSubmit={this.handleSubmit}>

          <h2>Post to Server:</h2>

          <input
            type="text"
            value={this.state.post}
            onChange={this.handleChange}
          />

          <button type="submit">
            Submit
          </button>

        </form>

        <h3>{this.state.responseToPost}</h3>

      </div>
    );
  }
}

export default App;