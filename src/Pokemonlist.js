import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
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
          <Link to={`/${list.id}`}>
            <Paper className={classes.paper}>{list.name.english} </Paper>
          </Link>
        </Grid>
      )}
    </>
  );
}
