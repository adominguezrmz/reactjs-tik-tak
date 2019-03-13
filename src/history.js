import React from "react";

export default function History(props) {
    const moves = props.history.map((step, move) => {
        const desc = move ?
            'Go to move #' + move :
            'Go to game start';
        return (
            <li key={move}>
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
