import {React, useState} from 'react'

function JokeCard(  {category, setup, delivery} ) {
    const [flip, setFlip] = useState(false)

    return (
        <div 
            className={`card ${flip ? 'flip' : ''}`}
            onClick={() => setFlip(!flip)}>
                {/* {flip ? delivery : null}    */}
            <div className="front">
                <h3>{setup}</h3>
                <p>#{category}</p>
            </div>
            
            <div className="back">
                <h5>{delivery}</h5>
            </div>
            
        </div>
    )
}

export default JokeCard;

