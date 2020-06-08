import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PokemonList from "./Pokemonlist";

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
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={1}>
          {pokeList &&
            pokeList.map((item, index) => (
              <PokemonList key={index} list={item} />
            ))}
        </Grid>
      </Grid>
    </div>
  );
}
