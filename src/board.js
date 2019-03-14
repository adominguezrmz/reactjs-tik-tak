import React from 'react';
import Square from './square';

class Board extends React.Component {

    renderSquare(i) {
        let isSelected = this.props.lastSelected === i;
        if (this.props.winnerMoves) {
            isSelected = this.props.winnerMoves.indexOf(i) !== -1
        }
        return (<Square key={i}
            isSelected={isSelected}
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
        />);
    }

    renderBoardRowCols(row) {
        let cols = []
        for (var i = 0; i < this.props.numCols; i++) {
            cols.push(<td key={row + i}>
                {this.renderSquare(row + i)}
            </td>
            );
        }
        return (<tr key={row}>{cols}</tr>);
    }

    render() {
        let board = []
        for (var i = 0; i < this.props.numRows; i++) {
            board.push(this.renderBoardRowCols(this.props.numRows * i))
        }
        return (
            <table>
                <tbody>
                    {board}
                </tbody>
            </table>
        );
    }
}

export default Board;
