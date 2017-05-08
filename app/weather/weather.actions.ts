import {Place} from '../search/search.state';
import * as actionTypes from './weather.action-types';
import {Weather} from './weather.state';

export function fetchCurrentWeather(place: Place) {
  return {type: actionTypes.FETCH_WEATHER, place};
}

export function updateWeather(weather: Weather) {
  return {type: actionTypes.UPDATE_WEATHER, weather};
}

export function fetchCurrentWeatherFailed() {
  return {type: actionTypes.FETCH_WEATHER_FAILED};
}
