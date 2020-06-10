import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function PokemonList({ list }) {
  const classes = useStyles();

  return (
    <>
      {list && (
        <Grid item xs={3}>
          <Link style={{ textDecoration: "none" }} to={`/${list.id}`}>
            <Paper className={classes.paper}>
              {" "}
              <img
                alt=""
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${list.id}.png`}
                width={"60%"}
              />
              <span>{list.name.english}</span>
            </Paper>
          </Link>
        </Grid>
      )}
    </>
  );
}
