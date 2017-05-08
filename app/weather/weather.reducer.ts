import * as actionTypes from './weather.action-types';
import {currentWeather, CurrentWeather, Weather} from './weather.state';

interface Action {
  type: string;
  weather?: Weather;
}

export function currentWeatherReducer(state: CurrentWeather = currentWeather, action: Action): CurrentWeather {
  switch (action.type) {
    case actionTypes.FETCH_WEATHER:
      return {...state, isFetchingWeather: true};
    case actionTypes.UPDATE_WEATHER:
      return {...state, isFetchingWeather: false, weather: action.weather};
    case actionTypes.FETCH_WEATHER_FAILED:
      return {...state, isFetchingWeather: false};
    default:
      return state;
  }
}
