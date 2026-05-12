import React, { Component } from "react";
import FormComponent from "./FormComponent";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      lactoseFree: false,
      nutsFree: false,
      vegan: false,
    };
  }

  // HANDLE CHANGE (IMPORTANT PART)
  handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // HANDLE SUBMIT → send data to URL
  handleSubmit = (event) => {
    event.preventDefault();

    const {
      firstName,
      lastName,
      age,
      gender,
      destination,
      lactoseFree,
      nutsFree,
      vegan,
    } = this.state;

    const query = `?firstName=${firstName}&lastName=${lastName}&age=${age}&gender=${gender}&destination=${destination}&lactoseFree=${lactoseFree ? "on" : ""}&nutsFree=${nutsFree ? "on" : ""}&vegan=${vegan ? "on" : ""}`;

    window.location.href = "http://localhost:3000/" + query;
  };

  render() {
    return (
      <FormComponent
        data={this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default App;