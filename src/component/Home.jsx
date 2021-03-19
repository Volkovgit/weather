import React, { useEffect } from "react";
import { Container, makeStyles } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { getPosition, getWeatherByName, setLoading } from "../redux/weatherReducer";
import Loader from "./Loader";
import Weather from "./Weather";
import bcgLess from "../assets/img/cold-bg.jpg";
import bcgMore from "../assets/img/warm-bg.jpg";
import "fontsource-roboto";

const useStyles = makeStyles({
  tempLessZero: {
    backgroundImage: `url(${bcgLess})`,
    height: "1000px",
    width: "300px",
    backgroundRepeat: "no-repeat",
    fontFamily: "fontsource-roboto",
  },
  tempMoreZero: {
    backgroundImage: `url(${bcgMore})`,
    height: "1000px",
    width: "300px",
    backgroundRepeat: "no-repeat",
    fontFamily: "fontsource-roboto",
  },
});

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosition());
  }, []);

  const clickButton = (text) => {
    if (!text){
      dispatch(setLoading());
      dispatch(getPosition());
    }
    else dispatch(getWeatherByName(text));
  };
  const weather = useSelector((state) => state.weather);
  const isLoading = useSelector((state) => state.isLoading);

  const classes = useStyles();
  if (isLoading) {
    return <Loader />;
  }

  const date = new Date(weather.dt * 1000);
  const temp = Math.round(weather.main.temp - 274);
  const sunrise = weather.sys.sunrise;
  const sunset = weather.sys.sunset;
  const city = weather.name;
  const wind = weather.wind;
  const main = weather.weather[0].main;

  return (
    <Container
      className={temp >= 0 ? classes.tempMoreZero : classes.tempLessZero}
    >
      <Weather
        findByName={clickButton}
        main={main}
        wind={wind}
        sunrise={sunrise}
        sunset={sunset}
        city={city}
        time={date}
        temp={temp}
      />
    </Container>
  );
}

export default Home;
