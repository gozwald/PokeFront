import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pokemonall from "./Pokemonall";
import Pokemondetails from "./Pokemondetails";
import Hero from "./hero";
import { Switch, Route } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function App() {
  const [pokeList, setPokemonList] = useState(null);

  useEffect(() => {
    fetch("/pokemon")
      .then((e) => e.json())
      .then((e) => setPokemonList(e));
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Hero />
      <Switch>
        <Route path="/:id/:filter?">
          <Pokemondetails />
        </Route>
        <Route path="/">
          <Pokemonall pokeList={pokeList} />
        </Route>
      </Switch>
    </div>
  );
}
