import React from 'react';
import { render } from "react-dom";
import { blockStatement } from '@babel/types';
import { NONAME } from 'dns';

class Tile extends React.Component{
   
    render(){
        return <div style={{
            height: '40px',
            width: '40px',
            border: '1px solid black',
            display: 'inline-block',
            margin: 0,
        }}>

        </div>;
    }
}





export default Tile;