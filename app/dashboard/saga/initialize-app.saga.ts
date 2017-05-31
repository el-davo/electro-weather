import { delay, takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { getSavedPlaces } from '../../places/places.service';
import { INITIALIZE_APP } from '../dashboard.action-types';
import { initializeApp } from '../dashboard.actions';
import { initializeAppFailed, initializeAppSuccess, updatePlaces } from '../dashboard.actions';
import { Places } from '../dashboard.state';

function* initialize() {
    try {
        const places: Places = yield call(getSavedPlaces);

        yield put(updatePlaces(places));

        yield call(delay, 1200);

        yield put(initializeAppSuccess());
    } catch (err) {
        yield put(initializeAppFailed());
    }
}

export function* initializeAppSaga() {
    yield* takeLatest(INITIALIZE_APP, initialize);
}
