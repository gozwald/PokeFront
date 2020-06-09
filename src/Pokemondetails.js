import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Pokemondetails() {
  const { type } = useParams();
  const { id } = useParams();
  const classes = useStyles();
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    fetch(`/pokemon/${id}`)
      .then((e) => e.json())
      .then((e) => setPokemonDetails(e));
  }, [id]);

  return (
    <>
      {pokemonDetails && (
        <>
          <Grid item xs={8}>
            <Paper className={classes.paper}>
              ID: {pokemonDetails[0].id}
              <br></br>
              Name: {pokemonDetails[0].name.english}
              <br></br>
              Type: 
              {pokemonDetails[0].type.map((e) => `${e} `)}
              <br></br>
              Base: 
              {Object.entries(pokemonDetails[0].base).map(([key, value]) => (
                <div>
                  {key}: {value}
                </div>
              ))}
            </Paper>
          </Grid>
        </>
      )}
    </>
  );
}

// "id": 7,
// "name": {
//     "english": "Squirtle",
//     "japanese": "ゼニガメ",
//     "chinese": "杰尼龟",
//     "french": "Carapuce"
// },
// "type": [
//     "Water"
// ],
// "base": {
//     "HP": 44,
//     "Attack": 48,
//     "Defense": 65,
//     "Sp. Attack": 50,
//     "Sp. Defense": 64,
//     "Speed": 43
// }
// },
