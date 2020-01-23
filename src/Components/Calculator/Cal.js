import React from "react";
// import ReactDOM from "react-dom";
import "./Cal.css";
import Button from "../Calculator/Button";
import Input from "../Calculator/Button";
import ClearBtn from "../Calculator/Button";

class Cal extends React.Component {
    constructor(props){
        super(props);

        this.state={
            input: "",
            previousNumber: "",
            currentNumber: "",
            operator: "",
        }
    }
    addToInput = val => {
        this.setState({
            input: this.state.input + val
        });
    }
  render() {
    return (
      <div className="Calculator">
        <div className="CalWrapper">
            <div className="row">
                <Input>
                    {this.state.input}
                </Input>
            </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={this.addToInput}>=</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>
          <div className="row">
              <ClearBtn>
                  Clear
              </ClearBtn>
          </div>
        </div>
      </div>
    );
  }
}

export default Cal;
