import React from 'react'
import { useState, useEffect } from "react"
import JokeCard from './JokeCard'


function JokeContainer({addJoke}) {
    const [jokes, setJokes] = useState([])
    const [filteredCategory, setFilteredCategory] = useState("All")
    //set state for filter and toggle true/ false

  useEffect(() => {
    fetch('http://localhost:8000/jokes')
    .then(response => response.json())
    .then(data => checkIfJokesExist(data))
  }, [])

  function checkIfJokesExist(data) {
    if (!!data){
      setJokes(data)
    }
}

function addJoke() {
  let updatedJoke = [...jokes, addJoke]
  setJokes(updatedJoke)

}

function updateFilteredJokes(chosenCategory) {
  setFilteredCategory(chosenCategory)
  
}

    return (
        <div 
          className="joke-container"
          className="card-grid">   
             {jokes.filter(joke => filteredCategory === "All" ? true : joke.category === filteredCategory).map((joke) => {
                return <JokeCard 
                    key={joke.id} 
                    category={joke.category} 
                    setup={joke.setup} 
                    delivery={joke.delivery}
                    updateFilteredJokes={updateFilteredJokes}/>
            })}
            
        </div>
    )
}
export default JokeContainer;