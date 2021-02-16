import React from 'react';

class Tile extends React.Component{
   
    render(){
        return <button style={{
            height: '50px',
            width: '50px',
            border: '1px solid black',
            display: 'inline-block',
            margin: 'auto',
            }} 
            type={{
                button: 'onclick()',
            }}
            class={{
                btn: 'btn-outline-danger',
            }}>

        </button>;
    }
}





export default Tile;