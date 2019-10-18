import React from 'react';
import { render } from "react-dom";
import { blockStatement } from '@babel/types';
import { NONAME } from 'dns';
import Tile from './Tile';



class TicTacToeContainer extends React.Component {

    render() {
        return <div
            id='container'
            style={{
                height: '150px',
                width: '150px',
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
       
        </div>;
    }
}





export default TicTacToeContainer;