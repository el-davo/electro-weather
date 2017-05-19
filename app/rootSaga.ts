import {fork} from "redux-saga/effects";
import {fetchSearchPlacesSaga} from "./search/saga/search.saga";
import {fetchWeatherSaga} from "./weather/saga/fetch-weather.saga";
import {selectPlaceSaga} from "./search/saga/select-place.saga";

export function* rootSaga() {
    yield [
        fork(fetchSearchPlacesSaga),
        fork(fetchWeatherSaga),
        fork(selectPlaceSaga)
    ];
}
