import React from 'react';

const Body = props => (
<div>
    <div className="jumbotron fluid">
    <h3><a href="/">Clicky Game</a></h3>
    <h3 className="score-board">Your Score 0 | Top Score 12</h3>
    </div>
    <div className="container">{props.children}</div>
</div>
);

export default Body;