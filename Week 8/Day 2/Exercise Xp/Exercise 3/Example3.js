import React, { Component } from "react";
import data from "./data2.json";

class Example3 extends Component {
  render() {
    return (
      <div>
        <h1>Experiences</h1>

        {data.Experiences.map((exp, index) => (
          <div key={index}>
            <h3>{exp.company}</h3>
            <p>{exp.role}</p>
            <p>{exp.years} years</p>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;