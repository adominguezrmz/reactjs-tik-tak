import React from 'react';
import Square from './square';

class Board extends React.Component {

    renderSquare(i) {
        let highlight = false;
        if (this.props.winnerMoves) {
            highlight = this.props.winnerMoves.indexOf(i) !== -1
        }
        return (<Square
            value={this.props.squares[i]}
            highlight={highlight}
            onClick={() => this.props.onClick(i)}
        />);
    }

    renderBoardRowCols(row) {
        let cols = []
        for (var i = 0; i < this.props.numCols; i++) {
            cols.push(this.renderSquare(row + i))
        }
        return (<div className="board-row">{cols}</div>);
    }

    render() {
        let board = []
        for (var i = 0; i < this.props.numRows; i++) {
            board.push(this.renderBoardRowCols(this.props.numRows * i))
        }
        return (
            <div>
                {board}
            </div>
        );
    }
}

export default Board;
