import React, { Component } from "react";
class Clock extends Component {
  state = {
    curTime: null
  };
  render() {
    setInterval(
      function() {
        this.setState({ curTime: new Date().toLocaleString() });
      }.bind(this),
      1000
    );
    return <div>Date: {this.state.curTime}</div>;
  }
}

export default Clock;
