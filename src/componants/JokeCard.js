import { React, useState } from "react";

function JokeCard({ category, setup, delivery, updateFilteredJokes }) {
  const [flip, setFlip] = useState(false);

  function handleFilterClick(event) {
    updateFilteredJokes(event.target.innerHTML);
  }

  return (
    <div className={`card ${flip ? "flip" : ""}`}>
      <div className="front">
        <h3 onClick={() => setFlip(!flip)}>{setup}</h3>
        <p className="filtered-category" onClick={handleFilterClick}>
          #<span>{category}</span>
        </p>
      </div>

      <div className="back" onClick={() => setFlip(!flip)}>
        <p>{delivery}</p>
      </div>
    </div>
  );
}

export default JokeCard;
