import React, { useEffect } from "react";
import { Container, Card, CircularProgress, Grid } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { getPosition } from "../redux/weatherReducer";
import Loader from "./Loader";
import Weather from "./Weather";

function Home() {
  const dispatch = useDispatch();

  const weather = useSelector((state) => state.weather);
  const isLoading = useSelector((state) => state.isLoading);
  useEffect(() => {
    dispatch(getPosition());
  }, []);

  if (isLoading) {
    return (
      <Loader/>
    );
  }

  return (
    <Container>
      <Weather main={weather.weather[0].main} wind={weather.wind} sunrise={weather.sys.sunrise} sunset={weather.sys.sunset} city={weather.name} time={weather.dt}/>
    </Container>
  );
}

export default Home;
