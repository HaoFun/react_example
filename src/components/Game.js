import React, { Component, Fragment } from 'react'
import Board from './Board'

class Game extends Component
{
    constructor() {
        super()
        this.state = {
            history: [{
                squares: Array(9).fill(null),
                laststep: 'Game start',
            }],
            xIsNext: true,
            stepNumber: 0,
            lines: [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
            ]
        }
    }

    calculateWinner(squares) {
        for (let i = 0; i < this.state.lines.length; i++) {
            const [a, b, c] = this.state.lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    handleClick(i) {
        const history = this.state.history
        const current = history[history.length - 1]
        const squares = current.squares.slice()
        if (this.calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X': 'O'
        const location = `(${(Math.floor(i / 3) + 1)},${((i % 3) + 1)})`
        const desc = `${squares[i]} moved to ${location}`
        this.setState({
            history: history.concat([{
                squares: squares,
                laststep: desc
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        })
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) ? false : true
        })
    }

    render() {
        const history = this.state.history
        const current = history[this.state.stepNumber]
        const winner = this.calculateWinner(current.squares)
        const moves = history.map((step, move) => {
            const desc = step.laststep;
            return (
                <li key={move}>
                    <a href='#' onClick={() => this.jumpTo(move)}>{desc}</a>
                </li>
            )
        })

        let status = winner ? `Winner player: ${winner}`: `Next player: ${this.state.xIsNext ? 'X': 'O'}`

        return (
            <Fragment>
                <div className={'game'}>
                    <div className={'game-board'}>
                        <Board squares={current.squares} onClick={(i) => this.handleClick(i)}/>
                    </div>
                    <div className={'game-info'}>
                        <div>{status}</div>
                        <ol>{moves}</ol>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Game