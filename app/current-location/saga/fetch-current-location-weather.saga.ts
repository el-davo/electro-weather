import { CurrentLocationData } from '../current-location.state';
import { fetchWeatherByLatLng } from '../../common/weather.service';
import { getCurrentLocation } from './current-location.service';
import { delay, takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { Weather } from '../../common/weather.interface';
import { Place } from '../../search/search.state';
import { FETCH_CURRENT_LOCATION_WEATHER } from '../current-location.action-types';
import { fetchCurrentLocationWeatherFailed, updateCurrentLocationWeather } from '../current-location.actions';

function* fetch() {
    try {
        let currentLocationData: CurrentLocationData = yield call(getCurrentLocation, 500);

        let weather: Weather = yield call(fetchWeatherByLatLng, currentLocationData.latitude, currentLocationData.longitude);

        yield put(updateCurrentLocationWeather(currentLocationData, weather));
    } catch (err) {
        console.log(err);
        yield put(fetchCurrentLocationWeatherFailed());
    }
}

export function* fetchCurrentLocationWeatherSaga() {
    yield* takeEvery(FETCH_CURRENT_LOCATION_WEATHER, fetch);
}
