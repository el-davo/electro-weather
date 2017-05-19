import { Places } from './dashboard.state';
import * as actionTypes from './dashboard.action-types';

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