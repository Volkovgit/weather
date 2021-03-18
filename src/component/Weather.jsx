import React from "react";
import { Container, Card, CircularProgress, Grid } from "@material-ui/core";
import { BiCloudSnow } from 'react-icons/bi';
function Weather({ main, wind, sunrise, sunset, city, time }) {
  console.log(main, wind, sunrise, sunset, city, time);
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      Main:{main=="Snow"? <BiCloudSnow/>: <div>Something</div>}<br/>
      Wind:{wind.speed}m/s<br/>
      Sunrise:{sunrise}<br/>
      Sunset:{sunset}<br/>
      Playceholder:{city}<br/>
      time:{time}<br/>
    </Grid>
  );
}

export default Weather;
