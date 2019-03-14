import React from 'react';

export default function TutorialExtraTasks() {
    const extraTasks = [
        "Display the location for each move in the format (col, row) in the move history list.",
        "When no one wins, display a message about the result being a draw.",
        "Add a toggle button that lets you sort the moves in either ascending or descending order.",
        "Rewrite Board to use two loops to make the squares instead of hardcoding them.",
        "When someone wins, highlight the three squares that caused the win.",
        "Bold the currently selected item.",
        "Bold the currently selected item in the move list."
    ]
    const tasks = extraTasks.map(function (task, index) {
        return <li key={index}>{task}</li>
    });
    return (
        <div>
            <h1>Tutorial: Extra Tasks</h1>
            <ol>
                {tasks}
            </ol>
        </div>
    );
}
