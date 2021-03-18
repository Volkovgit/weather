import React, { useEffect } from "react";
import { Container, Card, CircularProgress, Grid } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { getPosition } from "../redux/weatherReducer";

function Home() {
  const dispatch = useDispatch();

  const weather = useSelector((state) => state.weather);
  const isLoading = useSelector((state) => state.isLoading);
  useEffect(() => {
    dispatch(getPosition());
  }, []);
  console.log(weather);
  if (isLoading) {
    return (
      <Container>
        <Grid container direction="row" justify="center" alignItems="center">
          <CircularProgress />
        </Grid>
      </Container>
    );
  }
  // let currentWeather = {main:weather.weather.main,wind:weather.wind,sunrise:weather.sys.sunrise,sunset:weather.sys.sunset, city:weather.name, time:weather.dt};
  return (
    <Container>
      <Card variant="outlined">Город:{weather.name}</Card>
    </Container>
  );
}

export default Home;
