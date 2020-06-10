import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useParams, useHistory } from "react-router-dom";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Pokemondetails() {
  const { filter } = useParams();
  const { id } = useParams();
  const classes = useStyles();
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [name, setName] = useState(true);
  const [type, setType] = useState(true);
  const [base, setBase] = useState(true);
  const [current, setCurrent] = useState("none");

  const history = useHistory();

  const handleChange = (event) => {
    history.push(`/${id}/${event.target.value}`);
    setCurrent(event.target.value);
  };

  useEffect(() => {
    fetch(`/pokemon/${id}`)
      .then((e) => e.json())
      .then((e) => setPokemonDetails(e));
  }, [id]);

  useEffect(() => {
    if (filter === "name") {
      setName(true);
      setType(null);
      setBase(null);
    } else if (filter === "type") {
      setName(null);
      setType(true);
      setBase(null);
    } else if (filter === "base") {
      setName(null);
      setType(null);
      setBase(true);
    } else if (filter === "none") {
      setName(true);
      setType(true);
      setBase(true);
    }
  }, [filter]);

  return (
    <>
      {pokemonDetails && (
        <>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Filter
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={current}
              onChange={handleChange}
              label="filter"
            >
              <MenuItem value={"none"}>
                <em>No Filter</em>
              </MenuItem>
              <MenuItem value={"name"}>Name</MenuItem>
              <MenuItem value={"base"}>Base</MenuItem>
              <MenuItem value={"type"}>Type</MenuItem>
            </Select>
          </FormControl>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <img
                alt=""
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                height="200px"
              />
              <br></br>
              {name && (
                <>
                  Name:
                  {Object.entries(pokemonDetails[0].name).map(
                    ([key, value]) => (
                      <div>
                        {key}: {value}
                      </div>
                    )
                  )}
                </>
              )}
              {type && (
                <>
                  Type: 
                  {pokemonDetails[0].type.map((e) => `${e} `)}
                  <br></br>
                </>
              )}
              {base && (
                <>
                  Base: 
                  {Object.entries(pokemonDetails[0].base).map(
                    ([key, value]) => (
                      <div>
                        {key}: {value}
                      </div>
                    )
                  )}
                </>
              )}
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
