import React from "react";

class History extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ascSortOrder: true
        }
        this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState({
            ascSortOrder: !this.state.ascSortOrder
        })
    }

    render() {
        const ascSortOrder = this.state.ascSortOrder
        const toggleText = ascSortOrder
            ? "Moves Descending"
            : "Moves Ascending";
        const movesHist = this.props.history.slice()
        const len = movesHist.length - 1
        if (!ascSortOrder)
            movesHist.reverse()
        const moves = movesHist.map((step, move) => {
            let stepNumber = move
            let isStart = move === 0
            if (!ascSortOrder) {
                isStart = move === len
                stepNumber = (len - move)
            }
            const classNames = this.props.stepNumber === stepNumber ? "history-current-step" : "history-step";
            const desc = (isStart) ? 'Go to game start'
                : 'Go to move #' + (stepNumber);
            return (
                <li key={move} className={classNames}>
                    <button onClick={() => this.props.onClick(move)}>
                        {desc}
                    </button>
                </li>
            );
        });
        return (
            <div className="history-moves">
                <button onClick={() => this.handleToggleClick()}>{toggleText}</button>
                <ol>{moves}</ol>
            </div>
        );
    }
}
export default History;
