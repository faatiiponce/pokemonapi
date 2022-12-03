import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import "./App.css";
import LandingPage from "./paginas/landingPage/LadingPage";
import Home from "./paginas/home/Home";
import PokemonCreate from "./paginas/pokemonCreate/PokemonCreate.jsx";
import PokemonDetail from "./paginas/pokemonDetail/PokemonDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={LandingPage} />
          <Route exact path={"/home"} component={Home} />
          <Route exact path={"/detail:id"} component={PokemonDetail} />
          <Route exact path={"/create"} component={PokemonCreate} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
