import React, { Component } from "react";
import Ball from "./Ball";

export default class Lottery extends Component {
  static defaultProps = {
    title: "Loto",
    maxBalls: 6,
    maxNum: 40
  };
  constructor(props) {
    super(props);
    this.state = {
      nums: Array.from({ length: this.props.maxBalls })
    };
  }
  generate = () => {
    this.setState(curState => ({
      nums: curState.nums.map(
        n => Math.floor(Math.random() * this.props.maxNum) + 1
      )
    }));
  };

  handleClick = () => {
    this.generate();
  };
  render() {
    return (
      <section className="Lottery">
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map(n => (
            <Ball num={n} />
          ))}
        </div>
        <button onClick={this.handleClick}>Generate</button>
      </section>
    );
  }
}
