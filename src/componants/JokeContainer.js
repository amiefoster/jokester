import React from "react";
import { useState, useEffect } from "react";
import JokeCard from "./JokeCard";

function JokeContainer({ addJoke }) {
  const [jokes, setJokes] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState("All");
  //set state for filter and toggle true/ false
  const [categoryTF, setCategoryTF] = useState(true);
  const [deleteSwitch, setDeleteSwitch] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/jokes")
      .then((response) => response.json())
      .then((data) => checkIfJokesExist(data));
  }, [deleteSwitch]);

  function checkIfJokesExist(data) {
    if (!!data) {
      setJokes(data);
    }
  }

  function addJoke() {
    let updatedJoke = [...jokes, addJoke];
    setJokes(updatedJoke);
  }

  function updateFilteredJokes(chosenCategory) {
    if (categoryTF === true) {
      setFilteredCategory("All");
    } else {
      setFilteredCategory(chosenCategory);
    }
  }

  function toggleCategory() {
    setCategoryTF(!categoryTF);
  }

  function handleDeleteClick(id) {
    fetch(`http://localhost:8000/jokes/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        handleDelete(data);
      });
  }

  function handleDelete(deleteID) {
    const updatedJokes = jokes.filter((joke) => joke.id !== deleteID);
    setJokes(updatedJokes);
    setDeleteSwitch(!deleteSwitch);
  }

  function renderJokes() {
    return jokes
      .filter((joke) =>
        filteredCategory === "All" ? jokes : joke.category === filteredCategory
      )
      .map((joke) => {
        return (
          <JokeCard
            key={joke.id}
            category={joke.category}
            setup={joke.setup}
            delivery={joke.delivery}
            id={joke.id}
            updateFilteredJokes={updateFilteredJokes}
            toggleCategory={toggleCategory}
            handleDeleteClick={handleDeleteClick}
          />
        );
      });
  }

  //let displayJokes = categoryTF ? setFilteredCategory("All") : setFilteredCategory(joke.category)

  return (
    <div className="joke-container" className="card-grid">
      {renderJokes()}
    </div>
  );
}
export default JokeContainer;
