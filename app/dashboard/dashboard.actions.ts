import { Weather } from '../common/weather.interface';
import { Place } from '../search/search.state';
import * as actionTypes from './dashboard.action-types';
import { Places } from './dashboard.state';

export function initializeApp() {
    return { type: actionTypes.INITIALIZE_APP };
}

export function initializeAppSuccess() {
    return { type: actionTypes.INITIALIZE_APP_SUCCESS };
}

export function initializeAppFailed() {
    return { type: actionTypes.INITIALIZE_APP_FAILED };
}

export function updatePlaces(places: Places) {
    return { type: actionTypes.UPDATE_PLACES, places };
}

export function fetchWeather(place: Place) {
    return { type: actionTypes.FETCH_WEATHER, place };
}

export function updateWeather(place: Place, weather: Weather) {
    return { type: actionTypes.UPDATE_WEATHER, place, weather };
}

export function fetchWeatherFailed(place: Place) {
    return { type: actionTypes.FETCH_WEATHER_FAILED };
}
