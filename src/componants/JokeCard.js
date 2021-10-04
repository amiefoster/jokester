import React from 'react'

function JokeCard(  {category, setup, delivery} ) {
    console.log(category, setup, delivery)
    return (
        <div className="joke-card">
            <h3>{setup}</h3>
            <h5>{delivery}</h5>
            <p>{category}</p>
            
        </div>
    )
}

export default JokeCard;

