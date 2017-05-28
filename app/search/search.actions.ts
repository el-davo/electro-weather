import * as actionTypes from './search.action-types';
import {Place} from './search.state';

export function fetchSearchPlaces(term: string) {
    return {type: actionTypes.FETCH_SEARCH_PLACES, term};
}

export function updateSearchResults(places: Place[]) {
    return {type: actionTypes.UPDATE_SEARCH_RESULTS, places};
}

export function fetchSearchPlacesFailed() {
    return {type: actionTypes.FETCH_SEARCH_PLACES_FAILED};
}

export function showSearchOverlay() {
    return {type: actionTypes.SHOW_SEARCH_OVERLAY};
}

export function hideSearchOverlay() {
    return {type: actionTypes.HIDE_SEARCH_OVERLAY};
}

export function selectPlace(place: Place) {
    return {type: actionTypes.SELECT_PLACE, place};
}

export function placeSaved() {
    return {type: actionTypes.PLACE_SAVED};
}

export function placeHasNoWeather() {
    return {type: actionTypes.PLACE_HAS_NO_WEATHER};
}

export function selectPlaceFailed() {
    return {type: actionTypes.SELECT_PLACE_FAILED};
}
