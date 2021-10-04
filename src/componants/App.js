import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import JokeContainer from "./JokeContainer";
import SubmitJoke from "./SubmitJoke"

function App() {

  return (
    <div>
       <NavBar />
    <Switch>
      <Route exact path="/jokes">
        <JokeContainer />
      </Route>
      <Route exact path="/create-joke">
        <SubmitJoke />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
