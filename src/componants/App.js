import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import { useState, useEffect } from "react"
import JokeContainer from "./JokeContainer";
import JokeForm from "./JokeForm"
function App() {

  useEffect(() => {
    fetch('http://localhost:3000/jokes')
    .then(response => response.json())
    .then(data => console.log(data))
  })

  return (
    <div>
       <NavBar />
    <Switch>
      <Route exact path="/jokes">
        <JokeContainer />
      </Route>
      <Route exact path="/create-joke">
        <JokeForm />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
