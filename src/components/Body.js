import React from 'react';

const Body = props => (
<div>
    <div className="jumbotron fluid">
    <h3><a href="/">Clicky Game</a></h3>
    <h3>{props.scoreMsg}</h3>
    <h3 className="score-board">Your Score {props.currentScore} | Top Score {props.highScore}</h3>
    </div>
    <div className="container">{props.children}</div>
</div>
);

export default Body;