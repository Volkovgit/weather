import React,{useState} from "react";
import {
  Grid,
  TextField,
  Typography,
  makeStyles,
  Button
} from "@material-ui/core";
import { BiCloudSnow } from "react-icons/bi";
import bcg from "../assets/img/cold-bg.jpg";
const useStyles = makeStyles({
  searchBar:{
    marginTop:"10px",
    width:"100%",
  },
  searchButton:{
    width:"100%",
    marginTop:"10px"
  }
});

function Weather({ main, wind, sunrise, sunset, city, time, temp,findByName }) {
  const classes = useStyles(temp);

  const [searcPanel, setSearchPanel] = useState("");

  const getWeather = ()=>{
    findByName(searcPanel)
  }



  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={12}>
        <Grid container justify="center">
          <TextField className={classes.searchBar} variant="outlined" value={searcPanel} onInput={e=>setSearchPanel(e.target.value)}></TextField>
          <Button className={classes.searchButton} variant="contained" onClick={getWeather}>Get Weather</Button>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center">
            <Typography>Main:{main}</Typography>
            <Typography>Wind:{wind.speed}m/s</Typography>
            Temp:{temp}
            <br />
            Sunrise:{sunrise}
            <br />
            Sunset:{sunset}
            <br />
            Playceholder:{city}
            <br />
            time:{time.getHours() + ":" + time.getMinutes()}
            <br />

        </Grid>
      </Grid>
    </Grid>
  );
}

export default Weather;
