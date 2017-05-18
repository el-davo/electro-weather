import { delay, takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { FETCH_SEARCH_PLACES } from '../search.action-types';
import { fetchSearchPlacesFailed, updateSearchResults } from '../search.actions';
import { searchPlaces } from './search.service';

function* fetch({term}) {

  if (term.length === 0) {
    return;
  }

  try {
    yield call(delay, 100);

    const places = yield call(searchPlaces, term);

    console.log(places);

    yield put(updateSearchResults(places.results));
  } catch (err) {
    yield put(fetchSearchPlacesFailed());
  }
}

export function* fetchSearchPlacesSaga() {
  yield* takeLatest(FETCH_SEARCH_PLACES, fetch);
}
