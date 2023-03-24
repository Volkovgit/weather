import * as axios from "axios";

const LOAD_DATA = "LOAD_DATA";
const SET_COORD = "SET_COORD";
const SWITCH_LOADING = "SWITCH_LOADING"
const WEATHER_BY_NAME = "WEATHER_BY_NAME"
const initialstate = { weather: {}, isLoading:true};
const API_KEY = "b8180dd80bc383683b23aadabe04b513";
export const weatherReducer = (state = initialstate, action) => {
  switch (action.type) {
    case LOAD_DATA: {
      return { ...state, weather: { ...action.value } };
    }
    case SET_COORD: {
      // debugger;
      return { ...state, coords: { ...action.value } };
    }
    case SWITCH_LOADING:{
      return {...state,isLoading:!state.isLoading}
    }
    default: {
      return state;
    }
  }
};

export const setLoadData = (data = "value") => ({
  type: LOAD_DATA,
  value: data,
});

export const setLoading = ()=>({
  type:SWITCH_LOADING
})



export const getPosition = () => {
  return (dispatch) => {
    // const API_KEY = "b8180dd80bc383683b23aadabe04b513";
    const coordinats = [];
    const url = "https://ipapi.co/json/";
    axios
      .get(url)
      .then((response) => {
        coordinats.push(response.data.latitude.toFixed());
        coordinats.push(response.data.longitude.toFixed());
      })
      .then(() => {
        const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinats[0]}&lon=${coordinats[1]}&appid=${API_KEY}`;
        axios.get(urlWeather).then((response) => {
          dispatch(setLoadData(response.data));
          dispatch(setLoading());
        }).catch(()=>console.log("error"));
      });
  };
};

export const byNameAC = (text)=>({
  type: WEATHER_BY_NAME,
  city: text
})

export const getWeatherByName = (text)=>{
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${API_KEY}`
  
  return (dispatch)=>{
    axios.get(url).then(response => dispatch(setLoadData(response.data)))
  }
}
