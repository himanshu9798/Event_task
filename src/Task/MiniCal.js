import React, { Component } from 'react';
import './min.css';

class MiniCal extends Component {
  constructor() {
    super();
    this.state = {
      result: ''
    };
  }

  update(e) {
    const value = e.target.innerText; // Get button value

    // Prevent multiple operators in a row
    if (
      ['+', '-', '*'].includes(value) && 
      ['+', '-', '*'].includes(this.state.result.slice(-1))
    ) {
      return; // Do nothing if the last character is an operator
    }

    this.setState(prevState => ({
      result: prevState.result + value // Append value to result
    }));
  }

  clear() {
    this.setState({ result: '' }); // Reset the result
  }

  evaluate() {
    // Evaluate the expression using JavaScript's eval()
    const evaluatedResult = eval(this.state.result);
    this.setState({ result: evaluatedResult.toString() });
  }

  render() {
    return (
      <div className="calculator">
        <p style={{ backgroundColor: "white", width: "100%", height: "40px", color: "black" }}>
          {this.state.result}
        </p>
        <div style={{ display: "flex", gap: "10px", fontSize: "25px" }}>
          <button onClick={this.update.bind(this)}>1</button>
          <button onClick={this.update.bind(this)}>2</button>
          <button onClick={this.update.bind(this)}>3</button>
          <button onClick={this.update.bind(this)}>+</button>
        </div>
        <br />
        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={this.update.bind(this)}>4</button>
          <button onClick={this.update.bind(this)}>5</button>
          <button onClick={this.update.bind(this)}>6</button>
          <button onClick={this.update.bind(this)}>-</button>
        </div>
        <br />
        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={this.update.bind(this)}>7</button>
          <button onClick={this.update.bind(this)}>8</button>
          <button onClick={this.update.bind(this)}>9</button>
          <button onClick={this.update.bind(this)}>*</button>
        </div>
        <br />
        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={this.update.bind(this)}>0</button>
          <button onClick={this.update.bind(this)}>.</button>
          <button onClick={this.clear.bind(this)}>C</button>
          <button onClick={this.evaluate.bind(this)}>=</button>
        </div>
      </div>
    );
  }
}

export default MiniCal;
