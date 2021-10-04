import React from 'react'
import { useState, useEffect } from "react"
import JokeCard from './JokeCard'

export default function JokeContainer() {
    const [jokes, setJokes] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/jokes')
    .then(response => response.json())
    .then(data => checkIfJokesExist(data))
  }, [])

  function checkIfJokesExist(data) {
        if (!!data){
            setJokes(data)
        }
  }

    return (
        <div className="joke-container">   
             {jokes.map((joke) => {
                return <JokeCard 
                    key={joke.id} 
                    category={joke.category} 
                    setup={joke.setup} 
                    delivery={joke.delivery}/>
            })}
            
        </div>
    )
}
