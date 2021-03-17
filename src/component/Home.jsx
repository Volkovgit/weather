import React, { useEffect } from "react";
import { Container, Card } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { getPosition } from "../redux/weatherReducer";

function Home() {
  const dispatch = useDispatch();

  const weather = useSelector((state) => state.weather);

  useEffect(() => {
    dispatch(getPosition());
  }, []);

  console.log(weather);
  return (
    <Container>
      <Card variant="outlined">Город:{weather.name}</Card>
    </Container>
  );
}

export default Home;
