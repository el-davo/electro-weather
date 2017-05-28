import { Weather } from '../common/weather.interface';
import { Place } from '../search/search.state';
import * as actionTypes from './dashboard.action-types';
import { dashboard, Dashboard, Places } from './dashboard.state';

interface Action {
    type: string;
    places?: Places;
    place: Place;
    weather: Weather;
    slideNext?: Function;
    slidePrev?: Function;
}

export function dashboardReducer(state: Dashboard = dashboard, action: Action): Dashboard {
    switch (action.type) {
        case actionTypes.INITIALIZE_APP:
            return { ...state, isInitializingApp: true };
        case actionTypes.INITIALIZE_APP_SUCCESS:
            return { ...state, isInitializingApp: false };
        case actionTypes.INITIALIZE_APP_FAILED:
            return { ...state, isInitializingApp: false };
        case actionTypes.UPDATE_PLACES:
            return { ...state, places: action.places };
        case actionTypes.FETCH_WEATHER:
            return { ...state, places: { ...state.places, [action.place.id]: { ...action.place, isLoadingWeather: true, isLoadingFailed: false } } };
        case actionTypes.UPDATE_WEATHER:
            return { ...state, places: { ...state.places, [action.place.id]: { ...action.place, weather: action.weather, isLoadingWeather: false, isLoadingFailed: false } } };
        case actionTypes.FETCH_WEATHER_FAILED:
            return { ...state, places: { ...state.places, [action.place.id]: { ...action.place, weather: action.weather, isLoadingWeather: false, isLoadingFailed: true } } };
        case actionTypes.SET_SLIDER_FUNCTIONS:
            return { ...state, slideNext: action.slideNext, slidePrev: action.slidePrev };
        default:
            return state;
    }
}
