import React from "react";
import "./ClearBtn.css";

class ClearBtn extends React.Component {
  render() {
    return( 
      <div 
        className="clear-btn"
        onClick={() => this.props.handleClear()}
      >
        {this.props.children}
      </div>
    )
  }
}

export default ClearBtn;

