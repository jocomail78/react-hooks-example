import React, { Component } from "react";
class Child extends Component {
  render() {
    return (
      <div>
        <h1>Variable passed to child: {this.props.variableToPass}</h1>
      </div>
    );
  }
}

export default Child;
