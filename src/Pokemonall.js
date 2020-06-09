import React from "react";
import Grid from "@material-ui/core/Grid";
import PokemonList from "./Pokemonlist";
import Container from "@material-ui/core/Container";

export default function Pokemonall({ pokeList }) {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={1}>
          {pokeList &&
            pokeList.map((item, index) => (
              <PokemonList key={index} list={item} />
            ))}
        </Grid>
      </Grid>
    </Container>
  );
}
