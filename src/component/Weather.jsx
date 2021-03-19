import React, { useState } from "react";
import {
  Grid,
  TextField,
  Typography,
  makeStyles,
  Button,
  Card,
  Box,
} from "@material-ui/core";
import "fontsource-roboto";
const useStyles = makeStyles({
  searchBar: {
    marginTop: "10px",
    width: "100%",
  },
  searchButton: {
    width: "100%",
    marginTop: "10px",
  },
  cardInfo: {
    paddingTop: "30%",
    marginTop: "20%",
    width: "70%",
    // color: "white",
    textAlign: "center",
    fontFamily: "Roboto",
  },
  Time: {
    fontFamily: "Roboto",
    fontSize: "15px",
  },
  temp: {
    fontFamily: "Roboto",
    fontSize: "35px",
  },
  place: {
    fontFamily: "Roboto",
    fontSize:"40px"
  },
  main: {
    fontFamily: "Roboto",
  },
});

function Weather({
  main,
  city,
  time,
  temp,
  findByName,
}) {
  const classes = useStyles(temp);

  const [searcPanel, setSearchPanel] = useState("");

  const getWeather = () => {
    findByName(searcPanel);
  };

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={12}>
        <Grid container justify="center">
          <TextField
            className={classes.searchBar}
            variant="outlined"
            value={searcPanel}
            onInput={(e) => setSearchPanel(e.target.value)}
          ></TextField>
          <Button
            className={classes.searchButton}
            variant="contained"
            onClick={getWeather}
          >
            Узнать погоду
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center">
          <Box className={classes.cardInfo}>
            <Typography className={classes.place}>{city}</Typography>
            <Typography className={classes.Time}>
              {time[0]} {time[1]} {time[2]}
            </Typography>
            <Typography className={classes.temp}>{temp}℃</Typography>
            <div>------------------</div>

            <Typography className={classes.main}>{main}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Weather;
