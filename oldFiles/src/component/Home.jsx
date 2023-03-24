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
    color:"black"
  },
  tempMoreZero: {
    backgroundImage: `url(${bcgMore})`,
    height: "1000px",
    width: "300px",
    backgroundRepeat: "no-repeat",
    color:"white"
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

  const getNormalDate =(dataObj)=>{
    const months = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
    const weekDays = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье']
    const Year = dataObj.getFullYear();
    const Mouth = months[dataObj.getMonth()];
    const Day = weekDays[dataObj.getDay()-1];


    return [Year,Mouth,Day]
  }

  const getNormalWeather = (type)=>{
    console.log(type)
    const weathes = {
      Thunderstorm: "Гроза",
      Drizzle: "Мелкий дождь",
      Rain: "Дождь",
      Snow:"Снег",
      Clear:"Чистое небо",
      Clouds:"Облака",
      Mist:"Легкий туман",
      Smoke:"Задымленность",
      Haze:"Затуманивание",
      Dust:"Пыль",
      Sand:"Месок",
      Ash:"Пепел",
      Squall:"Сильный ветер",
      Tornado:"Торнадо",
    }
    return weathes[type]
  }

  const date = new Date(weather.dt * 1000);
  const temp = Math.round(weather.main.temp - 274);
  const city = weather.name;
  const main = weather.weather[0].main;

  return (
    <Container
      className={temp >= 0 ? classes.tempMoreZero : classes.tempLessZero}
    >
      <Weather
        findByName={clickButton}
        main={getNormalWeather(main)}
        city={city}
        time={getNormalDate(date)}
        temp={temp}
      />
    </Container>
  );
}

export default Home;
