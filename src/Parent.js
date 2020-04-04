import React, { Component } from "react";
import Child from "./Child";
class Parent extends Component {
  render() {
    const variableToPass = 123;
    return (
      <div>
        <Child variableToPass={variableToPass} />
      </div>
    );
  }
}

export default Parent;
