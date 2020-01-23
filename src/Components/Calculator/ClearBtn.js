import React from "react";
import "./ClearBtn.css";

class ClearBtn extends React.Component {
 
  render() {
    return (
     <div className="clear-btn">
         {this.props.children}
     </div>
    );
  }
}

export default ClearBtn;