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
