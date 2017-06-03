import { Weather } from '../common/weather.interface';
import { Place } from '../search/search.state';
import * as actionTypes from './current-location.action-types';
import { CurrentLocation, CurrentLocationData } from './current-location.state';
import { currentLocation } from './current-location.state';

interface Action {
    type: string;
    currentLocationData?: CurrentLocationData;
    weather?: Weather;
}

export function currentLocationReducer(state: CurrentLocation = currentLocation, action: Action): CurrentLocation {
    switch (action.type) {
        case actionTypes.FETCH_CURRENT_LOCATION_WEATHER:
            return { ...state, isFetchingCurrentLocation: true };
        case actionTypes.UPDATE_CURRENT_LOCATION_WEATHER:
            return { ...state, currentLocationData: action.currentLocationData, weather: action.weather, isFetchingCurrentLocation: false };
        case actionTypes.FETCH_CURRENT_LOCATION_WEATHER_FAILED:
            return { ...state, isFetchingCurrentLocation: false };
        default:
            return state;
    }
}
