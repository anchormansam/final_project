import React from "react";
import "./Button.css";

class Button extends React.Component {
  isOperator = val => {
    return !isNaN(val) || val === "." || val === "=";
  };
  render() {
    return (
      <div
        className={`ButtonDiv ${
          this.isOperator(this.props.children) ? "" : "operator"
        }`}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Button;
