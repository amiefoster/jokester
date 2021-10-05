import React from 'react'
import { useState, useEffect } from "react"
import JokeCard from './JokeCard'


function JokeContainer({addJoke}) {
    const [jokes, setJokes] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/jokes')
    .then(response => response.json())
    .then(data => checkIfJokesExist(data))
  }, [])

  function checkIfJokesExist(data) {
    if (!!data){
      if(!!addJoke){
        setJokes([...data, addJoke])
      }else{
        setJokes(data)
      }
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
export default JokeContainer;