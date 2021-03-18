import * as axios from "axios";

const LOAD_DATA = "LOAD_DATA";
const SET_COORD = "SET_COORD";
const SWITCH_LOADING = "SWITCH_LOADING"

const initialstate = { weather: {}, isLoading:true};

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

// export const setCoord = (data) => ({
//   type: SET_COORD,
//   value: data,
// });

export const getWeather = () => {
  return (dispatch) => {
    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=London&appid=ac064332e753f882489837dae6bcd333";

    axios.get(url).then((response) => {
      dispatch(setLoadData(response.data));
    });
  };
};

export const getPosition = () => {
  return (dispatch) => {
    const API_KEY = "b8180dd80bc383683b23aadabe04b513";
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
