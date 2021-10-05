
import React,{ useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import JokeContainer from "./JokeContainer";
import SubmitJoke from "./SubmitJoke"

function App() {
  const [addJoke, setAddJoke] = useState()


  function sendNewJoke(newJoke) {
    setAddJoke(newJoke)
  }

  return (
    <div>
       <NavBar />
    <Switch>
      <Route exact path="/jokes">
        <JokeContainer addJoke={addJoke} />
      </Route>
      <Route exact path="/create-joke">
        <SubmitJoke sendNewJoke={sendNewJoke} />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
