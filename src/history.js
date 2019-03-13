import React from "react";

export default function History(props) {
    const moves = props.history.map((step, move) => {
        const classNames = props.stepNumber === move ? "history-current-step" : "history-step";
        const desc = move ?
            'Go to move #' + move :
            'Go to game start';
        return (
            <li key={move} className={classNames}>
                <button onClick={() => props.onClick(move)}>
                    {desc}
                </button>
            </li>
        );
    });
    return (
        <ol>{moves}</ol>
    );
}
