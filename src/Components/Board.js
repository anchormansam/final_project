import React from 'react';
import { render } from "react-dom";
import { blockStatement } from '@babel/types';
import { NONAME } from 'dns';
import Tile from './Tile';


class Board extends React.Component {
    renderSquare(i) {
        return (
            <Tile
                key={i}
            />
        );
    }

    render() {
        const row = [];
        let k = 0;
        for (let i = 0; i < 12; i++) {
            const col = [];
            for (let j = 0; j < 12; j++) {
                col.push(this.renderSquare(12 * i + j));
                k++;
            }
            row.push(<div key={k} className="board-row">{col}</div>);
        }
        return (
            <div>
                {row}
            </div>
        );
    }
}







export default Board;