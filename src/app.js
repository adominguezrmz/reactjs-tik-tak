import React from 'react';
import Game from './game';
import TutorialExtraTasks from './tutorialExtraTasks';

export default function App() {
    return (
        <div>
            <h1>Tutorial: Intro to React</h1>
            <div className="name-hidden">Adan Dominguez Ramirez</div>
            <Game />
            <TutorialExtraTasks />
        </div>
    );
}
