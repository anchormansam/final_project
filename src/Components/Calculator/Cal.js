import React from "react";
// import ReactDOM from "react-dom";
import "./Cal.css";
import Button from "../Calculator/Button";
import Input from "../Calculator/Button";
import ClearBtn from "../Calculator/Button";

class Cal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      previousNumber: "",
      currentNumber: "",
      operator: ""
    };
  }
  addToInput = val => {
    this.setState({
      input: this.state.input + val
    });
  };
  addDecimal = val => {
    if (this.state.input.indexOf(".") === -1) {
      this.setState({ input: this.state.input + val });
    }
  };
  addZeroToInput = val => {
    if (this.state.input !== "") {
      this.setState({ input: this.state.input + val });
    }
  };
  clearInput = () => {
    this.setState({ input: "" });
  };
  letsAdd = val => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "plus";
  };
  letsSubtract = val => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "subtract";
  };
  letsSubtract = val => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "subtract";
  };
  letsDivide = val => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "divide";
  };
  letsMultiply = val => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "mulitply";
  };
  

  isEqual = val => {
    this.state.currentNumber = this.state.input;

    if ((this.state.operator == "plus")) {
      this.setState({
        input:
          parseFloat(this.state.previousNumber) +
          parseFloat(this.state.currentNumber)
      });
    }else if ((this.state.operator == "subtract")) {
      this.setState({
        input:
          parseFloat(this.state.previousNumber) -
          parseFloat(this.state.currentNumber)
      });
    }else if ((this.state.operator == "divide")) {
      this.setState({
        input:
          parseFloat(this.state.previousNumber) /
          parseFloat(this.state.currentNumber)
      });
    }else if ((this.state.operator == "mulitply")) {
      this.setState({
        input:
          parseFloat(this.state.previousNumber) *
          parseFloat(this.state.currentNumber)
      });
    
  };
  }
  render() {
    return (
      <div className="Calculator">
        <div className="CalWrapper">
          <div className="row">
            <Input>{this.state.input}</Input>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.letsDivide}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.letsMultiply}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.letsAdd}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addDecimal}>.</Button>
            <Button handleClick={this.addZeroToInput}>0</Button>
            <Button handleClick={this.isEqual}>=</Button>
            <Button handleClick={this.letsSubtract}>-</Button>
          </div>
          <div className="row">
            <ClearBtn handleClear={this.clearInput}>Clear</ClearBtn>
          </div>
        </div>
      </div>
    );
  }
}

export default Cal;
