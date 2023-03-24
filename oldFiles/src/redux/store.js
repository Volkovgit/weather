import {createStore,applyMiddleware } from 'redux'
import {weatherReducer} from './weatherReducer'
import thunk from 'redux-thunk';
const store = createStore(weatherReducer,applyMiddleware(thunk));

export default store;