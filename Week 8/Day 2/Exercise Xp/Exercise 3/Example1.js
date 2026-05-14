import React, { Component } from "react";
import data from "./data2.json";

class Example1 extends Component {
  render() {
    return (
      <div>
        <h1>Social Medias</h1>

        {data.SocialMedias.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    );
  }
}

export default Example1;