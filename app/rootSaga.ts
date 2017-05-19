import { fork } from "redux-saga/effects";
import { initializeAppSaga } from './dashboard/saga/initializa-app.saga';
import { fetchSearchPlacesSaga } from "./search/saga/search.saga";
import { fetchWeatherSaga } from "./weather/saga/fetch-weather.saga";
import { selectPlaceSaga } from "./search/saga/select-place.saga";

export function* rootSaga() {
    yield [
        fork(initializeAppSaga),
        fork(fetchSearchPlacesSaga),
        fork(fetchWeatherSaga),
        fork(selectPlaceSaga)
    ];
}
