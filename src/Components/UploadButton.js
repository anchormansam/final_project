import React, { createElement } from 'react';

function Button() {
    function handleClick(e) {
        e.preventDefault();
        alert('The link was clicked.');
    }
    render (){
        
        return (
            <button onClick={handleClick}>
            Click me
        </button>
    );
}
    
}



export default Button;