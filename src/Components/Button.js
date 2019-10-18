import React, { createElement } from 'react';

function Button() {
    function handleClick(e) {
        e.preventDefault();
        alert('ITS AN ALERT');
        // this.props.handleClick;
    }

    return (
        <button onClick={handleClick}>
            Click me
      </button>
    );
}



export default Button;