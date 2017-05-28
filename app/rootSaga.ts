import { fork } from 'redux-saga/effects';
import { fetchWeatherSaga } from './dashboard/saga/fetch-weather.saga';
import { initializeAppSaga } from './dashboard/saga/initialize-app.saga';
import { fetchSearchPlacesSaga } from './search/saga/search.saga';
import { selectPlaceSaga } from './search/saga/select-place.saga';

export function* rootSaga() {
    yield [
        fork(initializeAppSaga),
        fork(fetchSearchPlacesSaga),
        fork(fetchWeatherSaga),
        fork(selectPlaceSaga)
    ];
}
