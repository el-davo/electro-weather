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
        default:
            return state;
    }
}
