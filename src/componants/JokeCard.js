import { React, useState } from "react";

function JokeCard({
  id,
  category,
  setup,
  delivery,
  updateFilteredJokes,
  toggleCategory,
  handleDeleteClick,
}) {
  const [flip, setFlip] = useState(false);

  function handleFilterClick(event) {
    updateFilteredJokes(event.target.innerHTML);
    toggleCategory();
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
        <button className="delete-button" onClick={() => handleDeleteClick(id)}>🗑️</button>
      </div>
    </div>
  );
}

export default JokeCard;
