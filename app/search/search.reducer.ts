import * as actionTypes from './search.action-types';
import {Place, search, Search} from './search.state';

interface Action {
    type: string;
    places?: Place[];
}

export function searchReducer(state: Search = search, action: Action): Search {
    switch (action.type) {
        case actionTypes.FETCH_SEARCH_PLACES:
            return {...state, isFetchingSearch: true};
        case actionTypes.UPDATE_SEARCH_RESULTS:
            return {...state, isFetchingSearch: false, places: action.places};
        case actionTypes.SHOW_SEARCH_OVERLAY:
            return {...state, showSearchOverlay: true};
        case actionTypes.HIDE_SEARCH_OVERLAY:
            return {...state, showSearchOverlay: false};
        case actionTypes.SELECT_PLACE:
            return {...state, isCheckingPlaceHasWeather: true};
        case actionTypes.PLACE_SAVED:
            return {...state, isCheckingPlaceHasWeather: false};
        case actionTypes.PLACE_HAS_NO_WEATHER:
            return {...state, isCheckingPlaceHasWeather: false};
        case actionTypes.SELECT_PLACE_FAILED:
            return {...state, isCheckingPlaceHasWeather: false};
        default:
            return state;
    }
}
