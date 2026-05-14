import React, { Component } from "react";
import data from "./data2.json";

class Example2 extends Component {
  render() {
    return (
      <div>
        <h1>Skills</h1>

        <h2>Frontend</h2>
        {data.Skills.Frontend.map((skill, index) => (
          <p key={index}>{skill}</p>
        ))}

        <h2>Backend</h2>
        {data.Skills.Backend.map((skill, index) => (
          <p key={index}>{skill}</p>
        ))}
      </div>
    );
  }
}

export default Example2;