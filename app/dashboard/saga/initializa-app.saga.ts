import { Places } from '../dashboard.state';
import { initializeApp } from '../dashboard.actions';
import { delay, takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { INITIALIZE_APP } from '../dashboard.action-types';
import { initializeAppSuccess, initializeAppFailed, updatePlaces } from '../dashboard.actions';
import { getSavedPlaces } from '../../places/places.service';

function* initialize() {
    try {
        let places: Places = yield call(getSavedPlaces);

        updatePlaces(places);

        yield put(initializeAppSuccess());
    } catch (err) {
        yield put(initializeAppFailed());
    }
}

export function* initializeAppSaga {
    yield* takeLatest(INITIALIZE_APP, initialize);
}
