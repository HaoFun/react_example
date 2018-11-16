import React, { Component } from 'react'
import Square from './Square'

class Board extends Component
{
    renderSquare(i) {
        return (<Square key={i} value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />)
    }

    render() {
        let rows = [];
        for (let i = 0; i < 3 ; i++) {
            let row = [];
            for (let j = 3 * i; j < 3 * i + 3; j++) {
                row.push(this.renderSquare(j));
            }
            rows.push(<div className="board=row" key={i}>{row}</div>)
        }
        return (
            <div>
                {rows}
            </div>
        )
    }
}

export default Board