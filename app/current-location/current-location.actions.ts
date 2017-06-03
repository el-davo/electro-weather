import { Weather } from '../common/weather.interface';
import * as actionTypes from './current-location.action-types';
import { CurrentLocationData } from './current-location.state';

export function fetchCurrentLocationWeather() {
    return { type: actionTypes.FETCH_CURRENT_LOCATION_WEATHER };
}

export function updateCurrentLocationWeather(currentLocationData: CurrentLocationData, weather: Weather) {
    return { type: actionTypes.UPDATE_CURRENT_LOCATION_WEATHER, currentLocationData, weather };
}

export function fetchCurrentLocationWeatherFailed() {
    return { type: actionTypes.FETCH_CURRENT_LOCATION_WEATHER_FAILED };
}
