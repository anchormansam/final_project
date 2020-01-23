import React from "react";
// import ReactDOM from "react-dom";
import "./Cal.css";
import Button from "../Calculator/Button";
import Input from "../Calculator/Button";
import ClearBtn from "../Calculator/Button";

class Cal extends React.Component {
  render() {
    return (
      <div className="Calculator">
        <div className="CalWrapper">
            <div className="row">
                <Input></Input>
            </div>
          <div className="row">
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button>/</Button>
          </div>
          <div className="row">
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button>*</Button>
          </div>
          <div className="row">
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>+</Button>
          </div>
          <div className="row">
            <Button>.</Button>
            <Button>0</Button>
            <Button>=</Button>
            <Button>-</Button>
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
