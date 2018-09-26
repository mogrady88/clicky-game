import React from 'react';

const Card = props => (

<button onClick={props.handleClickEvent}  className="card col-md-1">
    <div className="img-container">
        <img name={props.name} alt={props.name} src={props.image}></img>
    </div>
</button>
)

export default Card;