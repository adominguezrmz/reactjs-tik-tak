import React from 'react';
import calculateWinner from './calculateWinner';
import Board from './board';
import History from './history';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
            numRows: 3,
            lastSelected: null
        };
    }

    getWinner(squares, cell) {
        let result = calculateWinner(squares)
        if (result) {
            result.winner = 'Winner: ' + result.winner
        }
        else if (squares[cell] && this.state.stepNumber === squares.length) {
            result = {
                winner: 'Draw'
            }
        }
        return result
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        const hasWinner = this.getWinner(squares, i);
        if (hasWinner) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
            lastSelected: i
        });
    }

    jumpTo(step) {
        let currentSelected = this.state.lastSelected
        let currentwinner = this.state.winner
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
            lastSelected: step > 0 ? currentSelected : null,
            winner: step > 0 ? currentwinner : null,
        });
    }

    render() {
        const history = this.state.history
        const current = history[this.state.stepNumber]
        const result = this.getWinner(current.squares, this.state.lastSelected)

        let status;
        if (result) {
            status = result.winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O')
        }
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        lastSelected={this.state.lastSelected}
                        numRows={this.state.numRows}
                        numCols={this.state.numRows}
                        winnerMoves={result && result.moves}
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <History
                        stepNumber={this.state.stepNumber}
                        history={history}
                        onClick={(i) => this.jumpTo(i)} />
                </div>
            </div>
        );
    }
}

export default Game;
