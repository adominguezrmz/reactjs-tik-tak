import React from 'react';

export default function Square(props) {
    const classNames = "square" + ((props.highlight) ? " square-highlight" : "");
    return (
        <button className={classNames}
            onClick={props.onClick}>
            {props.value}
        </button>
    );
}
